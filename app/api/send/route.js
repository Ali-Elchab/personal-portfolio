// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function sendMail(subject, body) {
  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transporter.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: subject,
      html: body,
    });
    console.log("sendResult", sendResult);
  } catch (error) {
    console.log(error);
  }
}
