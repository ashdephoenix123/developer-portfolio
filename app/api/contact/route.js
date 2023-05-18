import { NextResponse } from "next/server"
import sgMail from '@sendgrid/mail'

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: 'akashsarki12345@gmail.com', // Change to your recipient
            from: {
                name: email,
                email: 'akashsarki24@gmail.com'
            },
            subject: subject,
            text: 'Message received',
            html: `<p>${message} <br/> If you want to reply to this email then reply from akashsarki24@gmail.com</p>`,
        }
        await sgMail.send(msg)
        return NextResponse.json({ message: 'success' })
    } catch (error) {
        return NextResponse.json({ message: 'Some error occured, Please try again!' })

    }

}