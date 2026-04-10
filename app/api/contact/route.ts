// app/api/contact/route.ts
// Зависимости: npm install nodemailer

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// ── Яндекс SMTP ────────────────────────────────────────────────────────────────
// Переменные в .env.local:
//   YANDEX_USER=you@yandex.ru
//   YANDEX_PASS=app-password      ← пароль приложения, не основной!
//   MAIL_TO=recipient@example.com
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.YANDEX_USER,
    pass: process.env.YANDEX_PASS,
  },
});

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } =
      (await request.json()) as ContactPayload;

    // Минимальная серверная валидация
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ message: "Заполните все поля" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Форма сайта" <${process.env.YANDEX_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Новая заявка от ${name}`,
      text: [
        `Имя:     ${name}`,
        `Телефон: ${phone}`,
        `Email:   ${email}`,
        ``,
        `Сообщение:`,
        message,
      ].join("\n"),
      html: `
        <h2 style="color:#2f5d3a">Новая заявка с сайта</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Имя</b></td><td>${name}</td></tr>
          <tr><td><b>Телефон</b></td><td>${phone}</td></tr>
          <tr><td><b>Email</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><b>Задача</b></td><td style="white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[contact] mail error:", err);
    return NextResponse.json(
      { message: "Ошибка сервера. Попробуйте позже. Если вы используете VPN, попробуйте его отключить." },
      { status: 500 }
    );
  }
}
