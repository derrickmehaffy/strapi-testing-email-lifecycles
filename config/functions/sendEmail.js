module.exports = async (payload) => {
  const sendTo = process.env.ALERT_EMAIL;

  try {
    await strapi.plugins["email"].services.email.send({
      to: sendTo,
      subject: payload.subject,
      text: payload.text,
    });
  } catch (e) {
    console.log(e.response.body.errors);
  }
};
