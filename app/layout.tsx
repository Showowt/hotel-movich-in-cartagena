import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hotel movich in Cartagena",
  description: "hotel movich in Cartagena - Premium https://www.movichhotels.com/cartagena/ experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
