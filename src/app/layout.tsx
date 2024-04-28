import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const popppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Attendy",
  description: "An online attendance management system for schools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
