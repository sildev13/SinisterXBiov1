import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/ibm-plex-sans-thai';


export const metadata: Metadata = {
  title: "Suphason - Bio",
  description: "Suphason's bio website",
  icons: {
    icon: '/crayon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://bio.jittiphat.space/" />
      <meta property="og:site_name" content="bio.jittiphat.space" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/Screenshot.png" />
      <meta property="og:image:alt" content="Suphason Bio Preview" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
