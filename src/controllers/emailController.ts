import { Request, Response } from "express";
import { sendEmail } from "../services/emailService";

export const sendEmailHandler = async (req: Request, res: Response): Promise<Response> => {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
        return res.status(400).json({ message: "Faltan parámetros." });
    }

    try {
        const result = await sendEmail(to, subject, html);
        return res.status(200).json({ message: "Correo enviado exitosamente", result });
    } catch (error) {
        return res.status(500).json({ message: "Error al enviar el correo" });
    }
};
