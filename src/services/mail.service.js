const nodemailer = require("nodemailer");
const { EMAIL } = process.env;
const transporter = require("../config/mail");

class MailService {
  static async sendMail({ receiverEmail, subject, text, html }) {
    await transporter.sendMail({
      from: EMAIL,
      to: receiverEmail,
      subject: subject,
      text,
      html
    });
  }
}

module.exports = MailService;