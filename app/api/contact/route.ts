import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await transporter.sendMail({
      from: `"Saad Ahmed - Portfolio" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 40px 24px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px 16px 0 0; border-top: 3px solid #8b5cf6;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                              New Message Received
                            </h1>
                            <p style="margin: 8px 0 0; font-size: 13px; color: #94a3b8;">
                              via Portfolio Contact Form &bull; ${date}
                            </p>
                          </td>
                          <td align="right" valign="top">
                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #8b5cf6, #06b6d4); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
                              <span style="font-size: 20px; color: #ffffff; font-weight: 700; line-height: 48px; text-align: center; display: block; width: 48px;">SA</span>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Sender Info -->
                  <tr>
                    <td style="padding: 28px 40px 0; background-color: #111827;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1f2937; border-radius: 12px; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 24px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="50%" style="padding-right: 12px;">
                                  <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #8b5cf6;">From</p>
                                  <p style="margin: 0; font-size: 15px; font-weight: 600; color: #f1f5f9;">${name}</p>
                                </td>
                                <td width="50%" style="padding-left: 12px;">
                                  <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #06b6d4;">Email</p>
                                  <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #06b6d4; text-decoration: none; font-weight: 500;">${email}</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 24px 20px;">
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #f59e0b;">Subject</p>
                            <p style="margin: 0; font-size: 15px; font-weight: 600; color: #f1f5f9;">${subject}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message Body -->
                  <tr>
                    <td style="padding: 24px 40px 0; background-color: #111827;">
                      <p style="margin: 0 0 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Message</p>
                      <div style="padding: 24px; background-color: #1a1a2e; border-radius: 12px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #e2e8f0; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Reply Button -->
                  <tr>
                    <td style="padding: 28px 40px; background-color: #111827;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); border-radius: 8px;">
                            <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; padding: 12px 32px; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none;">
                              Reply to ${name.split(" ")[0]}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 40px; background-color: #0d1117; border-radius: 0 0 16px 16px; border-top: 1px solid #1f2937;">
                      <p style="margin: 0; font-size: 12px; color: #475569; text-align: center;">
                        This message was sent from your portfolio contact form at <a href="https://saad.run" style="color: #8b5cf6; text-decoration: none;">saad.run</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
