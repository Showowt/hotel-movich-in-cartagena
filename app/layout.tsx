import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hotel movich in Cartagena",
  description: "hotel movich in Cartagena - Servicio excepcional que supera expectativas",
  openGraph: {
    title: "hotel movich in Cartagena",
    description: "Servicio excepcional que supera expectativas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
