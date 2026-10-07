import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamogelo Mokone — Digital Solutions & Design",
  description:
    "Kamogelo Mokone is a Microsoft Power Platform, SharePoint and AI solutions developer and UI/UX designer based in Midrand, South Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
