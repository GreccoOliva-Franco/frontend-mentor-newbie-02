import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  style: 'normal',
  weight: ['200', '400', '600'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Four card feature section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
