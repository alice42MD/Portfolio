import { NextRequest, NextResponse } from "next/server";
//👇🏻 ticket ID generator function
import { v4 as generateID } from "uuid";
//👇🏻 imports the email template
import TicketCreated from "../../emails/ticketCreated";
//👇🏻 imports Resend
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "alicemartindevin@gmail.com"

export async function POST(req: NextRequest) {
    const { name, subject, content, email } = await req.json();

    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [toEmail],
        subject: "Ticket Confirmation Email 🎉",
        react: TicketCreated({ username: name, subject, content, email, ticketID: generateID()}),
    });

    if (error) {
        return NextResponse.json(
            { message: "Error sending email" },
            { status: 500 }
        );
    }

    return NextResponse.json({
        message: "Email sent successfully",
        data,
    });
}