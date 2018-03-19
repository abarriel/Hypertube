import * as nodemailer from 'nodemailer';
import { Environment } from '../../core';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: Environment.getConfig().email.address,
    pass: Environment.getConfig().email.password,
  },
});

const mailer = (who: any, token: any) => {
  // default because use mailer only for reset;
  const info = {
    to: who,
    subject: 'Reset Password - Hypertube',
    text: `Please Click Here: http://localhost:8080/reset?token=${token}`,
  };
  transport.sendMail(info);
  transport.close();
};

export default mailer;
