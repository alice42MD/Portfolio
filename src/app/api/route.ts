import { NextRequest, NextResponse } from "next/server";
import { v4 as generateID } from "uuid";
import TicketCreated from "../../emails/ticketCreated";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "alicemartindevin@gmail.com"

export async function POST(req: NextRequest) {
    const { name, subject, content, email } = await req.json();

    const { data, error } = await resend.emails.send({
        from: "Portfolio",
        to: [toEmail],
        subject: "Contact Email 🎉",
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