import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hieu Quoc Nguyen — BE Developer (Spring Boot)",
  description:
    "Personal portfolio of Hieu Quoc Nguyen — Backend Developer specializing in Spring Boot, building robust and scalable applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${preahvihear.className} ${preahvihear.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
