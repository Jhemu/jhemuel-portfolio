import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/utils/mailer';

interface EmailPayload {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailPayload = await request.json();

    // Validate required fields
    if (!body.from || !body.to || !body.subject) {
      return NextResponse.json(
        { error: 'Missing required fields: from, to, subject' },
        { status: 400 }
      );
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || body.from,
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      {
        success: true,
        messageId: info.messageId,
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error while sending mail:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
