import slugify from 'slugify';
import { A01Button } from 'components/atoms/A01Button/A01Button';
import { FormEvent, ReactElement, useState } from 'react';
import { Flex, Input, Text, TextArea } from 'styles/layout';
import * as S from './C10ContactForm.styles';
import { api } from 'util/api';

type ContactFormField = {
  Label: string;
  Type: string;
  Required: boolean;
};

type ContactForm = {
  Title: string;
  Fields: Array<ContactFormField>;
};

interface C10ContactFormProps {
  data: ContactForm;
  structureData: any;
}

export const C10ContactForm = ({ data, structureData }: C10ContactFormProps): ReactElement => {
  let messageCooldown = false;
  const messageSent = localStorage.getItem('message-sent');

  if (messageSent) {
    const lastSent = new Date(messageSent);
    const difference = (new Date().getTime() - lastSent.getTime()) / 1000 / 60 / 60;
    messageCooldown = difference < 16;
  }

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formObject: any = {};
    formData.forEach((value, key) => (formObject[key] = value));

    const data = {
      From: formObject['your-name'],
      Email: formObject['your-email'],
      Subject: formObject['subject'],
      Message: formObject['your-message'],
      Date: new Date().getTime(),
    };

    setIsSending(true);

    api
      .post('messages', { data })
      .then((response) => {
        setIsSending(false);
        setIsSent(true);
        localStorage.setItem('message-sent', new Date().toString());
      })
      .catch((error) => {
        setIsSending(false);
        setHasError(true);
      });
  };

  return (
    <S.StyledC10ContactForm>
      <S.StyledSocial data={structureData.social} />
      <Text as="h3" type="heading02">
        {data.Title}
      </Text>

      <S.Form onSubmit={handleSubmit}>
        {data.Fields.map((item) => {
          if (item.Type === 'Submit' && !isSent && !messageCooldown) {
            return (
              <A01Button
                icon={isSending ? 'pending' : ''}
                disabled={isSending}
                key={item.Label}
                type="submit"
                title={!isSending ? item.Label : ''}
              />
            );
          }
          if (item.Type === 'Text Field' || item.Type === 'Email') {
            return (
              <Flex key={item.Label} flexDirection="column" gap="1.6rem">
                <label>{item.Label}</label>
                <Input
                  type={item.Type === 'Email' ? 'email' : 'text'}
                  name={slugify(item.Label, { strict: true, lower: true })}
                  required={item.Required}
                />
              </Flex>
            );
          }
          if (item.Type === 'Text Area') {
            return (
              <Flex key={item.Label} flexDirection="column" gap="1.6rem">
                <label>{item.Label}</label>
                <TextArea
                  name={slugify(item.Label, { strict: true, lower: true })}
                  required={item.Required}
                />
              </Flex>
            );
          }
        })}
      </S.Form>
      {isSent && !hasError && !isSending && (
        <Text color="primary" type="heading02" margin="3.5rem 0 1.2rem">
          Message sent!
        </Text>
      )}
      {messageCooldown && !hasError && !isSent && (
        <Text color="red" type="body02" margin="3.5rem 0 1.5rem">
          * Only one message per day is allowed.
        </Text>
      )}
      {hasError && (
        <Text color="red" type="body02" margin="3.5rem 0 1.5rem">
          ⚠ There was an error sending your message. <br />
          Please try again later.
        </Text>
      )}
    </S.StyledC10ContactForm>
  );
};
