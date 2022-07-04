import { A05Image } from 'components/atoms/A05Image/A05Image';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { differenceInHours, format, addMinutes } from 'date-fns';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Flex, Text } from 'styles/layout';
import { api } from 'util/api';
import { getImageBySize } from 'util/getImageBySize';
import { Success } from '../Success/Success';
import * as S from './MakeAppointment.styles';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  time: HTMLInputElement;
}

interface MakeAppointmentProps {
  date: Date;
  image?: ImageAsset;
  timeMin: string;
  timeMax: string;
  timezone: string;
  confirmationMessage: string;
  setSuccess: Dispatch<SetStateAction<boolean | null>>;
}

export const MakeAppointment = ({
  date,
  image,
  timeMin,
  timeMax,
  timezone,
  confirmationMessage,
  setSuccess,
}: MakeAppointmentProps): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState<boolean | null>(null);
  const [timeValue, setTimeValue] = useState(0);
  const [scheduleDate, setScheduleDate] = useState<Date>(date);

  const getZonedTime = (time: string, date: Date): Date => {
    const zoned = new Date(`${format(date, 'yyyy-MM-dd')}T${time}${timezone}`);

    return zoned;
  };

  const zonedTimeMin = getZonedTime(timeMin, date);
  const zonedTimeMax = getZonedTime(timeMax, date);

  const imageSrc = image && getImageBySize(image, 'medium');
  const stepHours = differenceInHours(zonedTimeMax, zonedTimeMin);

  const hourOptions24: Array<string> = new Array(stepHours * 2 - 1)
    .fill('0')
    .map((item, index) => format(addMinutes(zonedTimeMin, index * 30), 'HH:mm'));
  const hourOptions12: Array<string> = new Array(stepHours * 2 - 1)
    .fill('0')
    .map((item, index) => format(addMinutes(zonedTimeMin, index * 30), 'hh:mm aa'));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const target = event.target as HTMLFormElement;
    const elements: FormElements = target.elements as FormElements;
    const hourIndex = parseInt(elements.time.value);
    const hour = hourOptions24[hourIndex];
    const time = `${hour}:00.000`;

    const datetime = new Date(`${format(date, 'yyyy-MM-dd')}T${time}`);

    const data = {
      Name: elements.name.value,
      Email: elements.email.value,
      Date: datetime.getTime(),
    };

    const response = await api.post('appointments', { data });

    if (response && response.status === 200) {
      setSuccess(true);
      setFormSuccess(true);
    } else {
      setSuccess(false);
      setFormSuccess(false);
    }
    setIsLoading(false);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = event.target.value;
    setTimeValue(parseInt(index));
  };

  useEffect(() => {
    const time = `${timeMin}${timezone}`;
    const zonedDate = new Date(`${format(date, 'yyyy-MM-dd')}T${time}`);
    const datetime = addMinutes(zonedDate, timeValue * 30);

    setScheduleDate(datetime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeValue]);

  return (
    <S.StyledMakeAppointment>
      {imageSrc && (
        <A05Image
          src={imageSrc}
          alt="Book an appointment"
          rounded={5}
          width={formSuccess ? '100' : '50%'}
          height={formSuccess ? '100' : 'auto'}
        />
      )}

      {formSuccess === true && <Success message={confirmationMessage} />}

      {formSuccess === null && (
        <S.StyledForm onSubmit={handleSubmit}>
          <Flex flexDirection="column" gap="2rem" alignItems="flex-start">
            <Text type="heading02" margin="0 0 2rem">
              Schedule an appointment
            </Text>
            <S.Block flexDirection="column" gap="1rem" alignItems="flex-start" color="primary">
              <Text type="caption">Date</Text>
              <Text type="heading03">{format(scheduleDate, 'PPPP')}</Text>
            </S.Block>
            <S.Block flexDirection="column" gap="1rem" alignItems="flex-start" color="cottonGrey">
              <Text type="caption">Name</Text>
              <S.StyledInput required type="text" placeholder="Enter your name" name="name" />
            </S.Block>
            <S.Block flexDirection="column" gap="1rem" alignItems="flex-start" color="cottonGrey">
              <Text type="caption">E-mail</Text>
              <S.StyledInput required type="email" placeholder="Enter your email" name="email" />
            </S.Block>
            <Text type="body02" color="grey" margin="">
              Please select an available timeslot.
            </Text>
            <S.Block flexDirection="column" gap="1rem" alignItems="flex-start" color="cottonGrey">
              <Text type="caption">Timeslot</Text>
              <S.StyledSelect name="time" onChange={handleTimeChange} required>
                <option disabled>Select a time</option>
                {hourOptions12.map((item, index) => (
                  <option key={item} value={index} defaultValue={0}>
                    {item}
                  </option>
                ))}
              </S.StyledSelect>
            </S.Block>
            <S.SubmitButton
              disabled={isLoading}
              title="Schedule appointment"
              type="submit"
              icon="Event Available"
            />
          </Flex>
        </S.StyledForm>
      )}
    </S.StyledMakeAppointment>
  );
};
