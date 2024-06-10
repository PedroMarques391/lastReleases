import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IMovieInterface } from "../app";
import "dotenv/config"


const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    },  
});
export default async function sendEmail(movies: IMovieInterface[]): Promise<SMTPTransport.SentMessageInfo> { 

    const message = movies.map(movie => {
        return `
        <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; color: #000">
            <p style="font-size: 16px; margin: 5px 0;"><strong>Título:</strong> ${movie.title}</p>
            <p style="font-size: 16px; margin: 5px 0;"><strong>Lançamento:</strong> ${movie.launch}</p>
            <p style="font-size: 16px; margin: 5px 0;"><strong>Gênero:</strong> ${movie.gender}</p>
            <p style="font-size: 16px; margin: 5px 0;"><strong>Descrição:</strong> ${movie.description}</p>
        </div>
        `;
    }).join('');

    const sucessOrError = (): string => {
        const body = message
            === ""
            ? (
                `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #ff1504; text-align: center; color: #FFF;">
                    <h1 style="padding-botton: 8px;">Poxa, parece que algo deu errado.</h1>
                    <h2 style="text-align: center; padding-botton: 8px;">Por algum motivo não encontrei os dados solicitados.</h2>
                </div>
            </div>
            `
            )
            :
            (
                `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #0066ff; text-align: center; color: #FFF;">
                    <h1 style="padding-botton: 8px;">Filmes em Cartaz</h1>
                    <h2 style="text-align: center; padding-botton: 8px;">Tenho aqui os filmes em exibição no Brasil</h2>
                </div>
              <div>${message}</div>
            </div>
            `
            )
        return body
    }

    return await transporter.sendMail({
        from: `"Pedro Marques 👻" <${process.env.USER_EMAIL}>`,
        to: process.env.ADDRESSEE,
        subject: "Filmes em Cartaz ✅",
        text: message,
        html: sucessOrError(),
    });
}
