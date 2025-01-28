import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465, // SSL port
            secure: true, // Use SSL
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your App Password
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: 'zayeem@workcleverly.ai',
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Email could not be sent.' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}