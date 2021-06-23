# Sample Email lifecycle

This is a sample Strapi application showing how you can send emails when there are new, updated, or deleted entries from the Admin panel. **Note this logic will send the email on end-user requests but the fields used in the subject for first + last name will not be populated**

Key files:

- [Global Email function](./config/functions/sendEmail.js) => Used to easily send emails anywhere in the Strapi application
- [Environment variables for storing SendGrid information](./.env.example) => this should be copied to a `.env` file (which isn't sourced controlled)
- [Email provider settings](./config/plugins.js) => Used to configure your email provider, in this example I used sendgrid
- [Lifecycle Functions for the Article Model](./api/article/models/article.js) => Very basic example using just normal text (instead of HTML) in the afterCreate, afterUpdate, and afterDelete.

For specifics on sending email I would advise you review our documentation for the email plugin:

https://strapi.io/documentation/developer-docs/latest/development/plugins/email.html#email

Specifically using email templates:

https://strapi.io/documentation/developer-docs/latest/development/plugins/email.html#send-an-email-using-a-template-sendtemplatedemail
