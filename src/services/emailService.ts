import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to,
            subject,
            html
        });

        return response;
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        throw error;
    }
};
