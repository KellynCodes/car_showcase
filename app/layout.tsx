import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@components";


export const metadata: Metadata = {
  title: "Create Hub",
  description: "Streamline your care rental experience with our effortless booking process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
