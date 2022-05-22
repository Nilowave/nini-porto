"use strict";

const { format } = require("date-fns");

/**
 *  appointment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::appointment.appointment",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      const { Email: email, Name: name, Date: date } = response.data.attributes;

      const selectedDate = new Date(date);
      const formattedDate = format(selectedDate, "PPPP");
      const formattedTime = format(selectedDate, "p");

      const confirmationTemplate = {
        subject: "Confirmation of appointment with Nini Meulens on <%= date %>",
        text: `Your appointment has been scheduled and confirmed!`,
        html: `<h1>NMeulens.com</h1>
          <p style="font-size: 16px; line-height: 2; font-weight: bold;">Your appointment has been scheduled and confirmed!</p>
          <p style="font-size: 16px; line-height: 1.5;">Hey <%= name %>,</p>
          <p style="font-size: 16px; line-height: 1.5;">This email is to let you know that your appointment on <span style="font-size: 20px; font-weight: bold;"><%= date %></span> with Nini Meulens at <span style="font-size: 20px; font-weight: bold;"><%= time %></span> has been confirmed. If you have questions or concerns before your session, kindly let us know by replying to this email.</p>
          <p style="font-size: 16px; line-height: 1.5;">Thanks for booking with NMeulens.com</p>
          `,
      };

      const bookingTemplate = {
        subject: "New appointment booking!",
        text: `Your appointment has been scheduled and confirmed!`,
        html: `<h2>New appointment booking!</h2>
          <p style="font-size: 16px; line-height: 1.5;">Hi Nini,</p>
          <p style="font-size: 16px; line-height: 2;">Someone booked an appointment with you!</p>
          <p style="font-size: 16px; line-height: 1.5;">Name: <span style="font-size: 18px; font-weight: bold;"><%= name %></span></p>
          <p style="font-size: 16px; line-height: 1.5;">Email: <span style="font-size: 18px; font-weight: bold;"><%= email %></span></p>
          <p style="font-size: 16px; line-height: 1.5;">Date: <span style="font-size: 18px; font-weight: bold;"><%= date %></span></p>
          <p style="font-size: 16px; line-height: 1.5;">Time: <span style="font-size: 18px; font-weight: bold;"><%= time %></span></p>

          `,
      };

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: email,
        },
        confirmationTemplate,
        {
          name,
          email,
          date: formattedDate,
          time: formattedTime,
        }
      );

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "info@nmeulens.com",
        },
        bookingTemplate,
        {
          name,
          email,
          date: formattedDate,
          time: formattedTime,
        }
      );

      return response;
    },
  })
);
