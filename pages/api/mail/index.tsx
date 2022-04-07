import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      const transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_PASS,
        },
      });

      const mailOptions = {
        from: `enviva.me - <${process.env.NEXT_PUBLIC_EMAIL}>`,
        to: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
        subject: 'Nova Mensagem - enviva.me',
        text: `
          Nome: ${name},
          E-mail: ${email},
          Telefone: ${phone},
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email has been sent' });
    } catch (err) {
      res.status(500);
    }
  } else {
    res.status(404).json({ message: 'Invalid Route' });
  }
};
