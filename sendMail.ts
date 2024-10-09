import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Replace with your SMTP server
        port: 587, // Replace with the correct port
        secure: false, // Set to true if using port 465
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password or app password
        },
    });

    const mailOptions = {
        from: `"Sender Name" <${process.env.EMAIL_USER}>`,
        to: 'recipient@example.com', // Replace with the recipient's email
        subject: 'Test Email from TypeScript',
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
