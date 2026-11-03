import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trident Academy of Professional Studies (TAPS) | Bhubaneswar",
  description: "Premier undergraduate institution affiliated to Utkal University offering BCA, BBA, and B.Sc Honours programmes in Bhubaneswar, Odisha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased bg-white">
      <body className="min-h-full flex flex-col bg-white text-[#001D4A] selection:bg-[#0020D6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
