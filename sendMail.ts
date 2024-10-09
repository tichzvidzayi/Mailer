import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.prototo.com', 
        port: 587, 
        secure: true, 
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });

    const mailOptions = {
        from: `"John Doe" <${process.env.EMAIL_USER}>`,
        to: 'johnz@prototo.com', 
        subject: 'Test Email',
        text: 'This is a test email sent from a TypeScript script.',
        html: '<b>This is a test email sent from a TypeScript script.</b>',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

sendEmail();
