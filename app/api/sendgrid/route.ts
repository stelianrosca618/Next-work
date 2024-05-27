import { NextResponse, type NextRequest } from "next/server";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();
  const msg = {
    to: "hello@hakkaren.co",
    from: "hello@hakkaren.co",
    subject: `[Lead from ${data.company}] : ${data.name}`,
    html: `
      <div>Name: ${data.name}</div>
      <div>Email: ${data.email}</div>
      <div>Company: ${data.company}</div>
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      return NextResponse.json({ success: true });
    })
    .catch((error: any) => {
      console.error(error.response.body);
      return NextResponse.error();
    });

  return NextResponse.json({});
}

// export const dynamic = "force-static";
