import { NextRequest, NextResponse } from "next/server";
//👇🏻 ticket ID generator function
import { v4 as generateID } from "uuid";
//👇🏻 imports the email template
import TicketCreated from "../../emails/ticketCreated";
//👇🏻 imports Resend
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const email = "alicemartin.crea@gmail.com"

export async function POST(req: NextRequest) {
    //👇🏻 accepts customer's input from frontend
    const { name, subject, content } = await req.json();
    //👇🏻 logs them
    console.log({ name, subject, content });
    //👇🏻 send an email using the email template
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Ticket Confirmation Email 🎉",
        react: TicketCreated({ username: name, ticketID: generateID() }),
    });

    if (error) {
      console.log(error)
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