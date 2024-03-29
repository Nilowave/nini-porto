module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "wave-colorpicker": {
    enabled: true,
    resolve: "src/plugins/wave-colorpicker",
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: {
          email: "info@nmeulens.com",
          name: "Nini Meulens",
        },
        defaultReplyTo: "info@nmeulens.com",
        testAddress: "mockingbird87@gmail.com",
      },
    },
  },
  // ...
});
