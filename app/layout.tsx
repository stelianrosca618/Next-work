import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Hakkaren",
  description: "Collaborative Data Seeding Platform and Test Data Management",
  icons: [{ rel: "icon", url: "favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />
        <script
          src="//code.tidio.co/cza6lntzrlntpanqcetus9asnb6sen65.js"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased custom-purple text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
        <div
          // dangerouslySetInnerHTML={{
          //   __html: `
          //     <a
          //       href="#"
          //       onclick="window.displayPreferenceModal();return false;"
          //       id="termly-consent-preferences"
          //     >
          //       Consent Preferences
          //     </a>
          //     <script
          //       type="text/javascript"
          //       src="https://app.termly.io/embed.min.js"
          //       data-auto-block="on"
          //       data-website-uuid="839c8578-556e-4087-8c8d-884a9405d54f"
          //     ></script>
          //   `,
          // }}
        ></div>
      </body>
    </html>
  );
}
