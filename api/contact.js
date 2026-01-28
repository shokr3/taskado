import Mailjet from 'node-mailjet';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Initialize Mailjet
  const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
  );

  try {
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL || 'noreply@taskado.app',
            Name: 'Taskado Contact Form',
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL || 'taskado@knowit.tech',
              Name: 'Taskado Team',
            },
          ],
          Subject: `Nova poruka s web stranice - ${company}`,
          TextPart: `
Ime: ${name}
Email: ${email}
Tvrtka: ${company}
Telefon: ${phone || 'Nije navedeno'}

Poruka:
${message}
          `,
          HTMLPart: `
<h2>Nova poruka s Taskado web stranice</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Ime:</td>
    <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
    <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Tvrtka:</td>
    <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefon:</td>
    <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'Nije navedeno'}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Poruka:</td>
    <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
  </tr>
</table>
          `,
        },
      ],
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Mailjet error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
