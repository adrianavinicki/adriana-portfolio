//import type { NextApiRequest, NextApiResponse } from "next";
//import { EmailTemplate } from "../../components/EmailTemplate";
import { Contact } from "../contact/index.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const correoPersonal = process.env.CORREO_PERSONAL;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const { name, email, subject, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [correoPersonal],
    subject: "Mensaje de Posible Cliente",
    react: Contact({ name, email, subject, message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
};
