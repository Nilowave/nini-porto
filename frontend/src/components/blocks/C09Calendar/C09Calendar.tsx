import { ReactElement, useCallback, useContext, useEffect, useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  isWithinInterval,
  isBefore,
} from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import * as S from './C09Calendar.styles';
import { api, ApiAttributes } from 'util/api';
import { BlockContext } from 'components/templates/T01Blocks/T01Blocks.context';
import { M03Modal } from 'components/molecules/M03Modal/M03Modal';
import { MakeAppointment } from './components/MakeAppointment/MakeAppointment';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';

type Availability = {
  From: string;
  To?: string;
  Available: boolean;
};

type Appointment = {
  Name: string;
  Email: string;
  Date: string;
};

type AppointmentCollection = Array<ApiAttributes<Appointment>>;

export type CalendarData = {
  Timezone: string;
  TimeFrom: string;
  TimeTo: string;
  Availability: Array<Availability>;
  Image: ImageAsset;
  Confirmation: string;
};

interface C09CalendarProps {
  data: CalendarData;
}

export const C09Calendar = ({ data }: C09CalendarProps): ReactElement => {
  const { Availability, TimeFrom, TimeTo, Timezone } = data;

  const { setContextData } = useContext(BlockContext);

  const [isTodayAvailable, setIsTodayAvailable] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [appointments, setAppointments] = useState<AppointmentCollection>();

  const timezone = Timezone.split(' ')[0].replace('GMT+', '+0');

  const handleClickToday = () => {
    const today = new Date();
    const isAvailable = !getUnavailable(today);

    setIsTodayAvailable(isAvailable);
    if (isAvailable) {
      setSelectedDate(today);
      setActiveDate(today);
    }
  };

  const getHeader = () => {
    return (
      <S.Header>
        <S.TodayButton disabled={!isTodayAvailable} onClick={handleClickToday}>
          Today
        </S.TodayButton>
        <S.ArrowButton direction="left" onClick={() => setActiveDate(subMonths(activeDate, 1))} />
        <S.ArrowButton direction="right" onClick={() => setActiveDate(addMonths(activeDate, 1))} />
        <S.CurrentMonth>{format(activeDate, 'MMMM yyyy')}</S.CurrentMonth>
      </S.Header>
    );
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <S.WeekName key={`weekday-${format(addDays(weekStartDate, day), 'E')}`}>
          {format(addDays(weekStartDate, day), 'E')}
        </S.WeekName>,
      );
    }
    return <S.WeekContainer>{weekDays}</S.WeekContainer>;
  };

  const getAppointment = useCallback(
    (date: Date) => {
      if (!appointments) return false;

      const timezone = 'Europe/Amsterdam';

      const appointment = appointments.filter((item) => {
        const filterDate = new Date(item.attributes?.Date || '');

        const fromDate = zonedTimeToUtc(
          new Date(`${format(date, 'yyyy-MM-dd')} ${TimeFrom}`),
          timezone,
        );

        const toDate = zonedTimeToUtc(
          new Date(`${format(date, 'yyyy-MM-dd')} ${TimeTo}`),
          timezone,
        );

        return isWithinInterval(filterDate, {
          start: fromDate,
          end: toDate,
        });
      })[0];

      return !!appointment;
    },
    [appointments, TimeFrom, TimeTo],
  );

  const getUnavailable = useCallback(
    (date: Date) => {
      const today: Date = new Date();
      const zonedDate = new Date(`${format(date, 'yyyy-MM-dd')}T${TimeTo}${timezone}`);

      const unavailable = Availability.filter((item) => {
        const filterDate = new Date(`${format(date, 'yyyy-MM-dd')}T${TimeFrom}${timezone}`);
        const fromDate = new Date(`${item.From}T${TimeFrom}${timezone}`);

        const toDate = item.To
          ? new Date(`${item.To}T${TimeTo}${timezone}`)
          : new Date(`${item.From}T${TimeTo}${timezone}`);

        return isWithinInterval(filterDate, {
          start: fromDate ? fromDate : new Date(),
          end: toDate ? toDate : new Date(),
        });
      });

      const isUnavailable = isBefore(zonedDate, today) || !!unavailable[0];

      return isUnavailable;
    },
    [Availability, TimeFrom, TimeTo, timezone],
  );

  const generateDatesForCurrentWeek = useCallback(
    (date: Date, selectedDate: Date, activeDate: Date) => {
      let currentDate = date;
      const week = [];
      for (let day = 0; day < 7; day++) {
        const cloneDate = currentDate;

        week.push(
          <S.Day
            isInactive={!isSameMonth(currentDate, activeDate)}
            isSelected={isSameDay(currentDate, selectedDate)}
            isToday={isSameDay(currentDate, new Date())}
            isAppointment={getAppointment(currentDate)}
            disabled={getUnavailable(currentDate)}
            key={`date-${currentDate.toDateString()}-${format(currentDate, 'd')}`}
            onClick={() => {
              setSelectedDate(cloneDate);
            }}
          >
            <span>{format(currentDate, 'd')}</span>
          </S.Day>,
        );
        currentDate = addDays(currentDate, 1);
      }
      return <S.WeekContent key={`week-${date.toString()}`}>{week}</S.WeekContent>;
    },
    [getAppointment, getUnavailable],
  );

  const getDates = useCallback(() => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate, selectedDate, activeDate));
      currentDate = addDays(currentDate, 7);
    }

    return <S.WeekContainer>{allWeeks}</S.WeekContainer>;
  }, [activeDate, generateDatesForCurrentWeek, selectedDate]);

  const handleCtaClick = useCallback(() => {
    setModalData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const handleCloseModal = () => {
    setSuccess(null);
    setModalData(false);
  };

  useEffect(() => {
    api.get('appointments').then((data) => {
      if (data) {
        setAppointments(data as AppointmentCollection);
      }
    });
  }, [success]);

  useEffect(() => {
    handleClickToday();
    setContextData({ cta: { action: handleCtaClick } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.StyledC09Calendar>
      {getHeader()}
      <S.CalendarWrapper>
        {getWeekDaysNames()}
        {getDates()}
      </S.CalendarWrapper>
      {modalData && (
        <M03Modal onClose={handleCloseModal}>
          <MakeAppointment
            date={selectedDate}
            image={data.Image}
            timeMin={TimeFrom}
            timeMax={TimeTo}
            timezone={timezone}
            setSuccess={setSuccess}
            confirmationMessage={data.Confirmation}
          />
        </M03Modal>
      )}
    </S.StyledC09Calendar>
  );
};
