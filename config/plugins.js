module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_KEY"),
    },
    settings: {
      defaultFrom: "support@strapi.io",
      defaultReplyTo: "support@strapi.io",
    },
  },
});
