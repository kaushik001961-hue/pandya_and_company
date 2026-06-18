import { Resend } from "resend";

export async function POST(req: Request) {
  const body = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  await resend.emails.send({
    from: "website@yourdomain.com",
    to: "info@pandyaandcompany.com",
    subject: "New Inquiry",
    html: `
      <h2>New Inquiry</h2>
      <p>Name: ${body.name}</p>
      <p>Phone: ${body.phone}</p>
      <p>Email: ${body.email}</p>
      <p>Message: ${body.message}</p>
    `,
  });

  return Response.json({ success: true });
}