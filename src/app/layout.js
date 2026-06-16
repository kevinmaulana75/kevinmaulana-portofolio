import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Portfolio Kevin Maulana",
  description:
    "Creative techie blending design & tech — UI/UX, web development, visual content, and IT infrastructure.",
  keywords: [
    "Kevin Maulana",
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "Graphic Designer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="text-white min-h-screen">{children}</body>
    </html>
  );
}
