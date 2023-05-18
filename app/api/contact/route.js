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
            }, // Change to your verified sender
            subject: subject,
            text: 'message received',
            html: `<p>${message}</p>`,
        }
        await sgMail.send(msg)
        return NextResponse.json({ message: 'success' })
    } catch (error) {
        return NextResponse.json({ message: 'Some error occured, Please try again!' })

    }

}