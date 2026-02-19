import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { resolveMx } from "dns/promises"

// Valider le format de l'email
function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Vérifier si le domaine de l'email existe (via enregistrements MX)
async function isValidEmailDomain(email: string): Promise<boolean> {
  try {
    const domain = email.split("@")[1]
    const mxRecords = await resolveMx(domain)
    return mxRecords && mxRecords.length > 0
  } catch (error) {
    return false
  }
}

// Créer un transporteur nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Valider le format de l'email
    if (!isValidEmailFormat(email)) {
      return NextResponse.json(
        { error: "Le format de l'adresse email n'est pas valide" },
        { status: 400 }
      )
    }

    // Vérifier que le domaine de l'email existe
    const isValidDomain = await isValidEmailDomain(email)
    if (!isValidDomain) {
      return NextResponse.json(
        { error: "Le domaine de l'adresse email n'existe pas" },
        { status: 400 }
      )
    }

    // Envoyer l'email à hamzabenmoussa.tel@gmail.com
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hamzabenmoussa.tel@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json(
      { message: "Email envoyé avec succès!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    )
  }
}
