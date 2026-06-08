import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Raditya Adin Nugroho - Web Developer",
  description:
    "Personal portfolio website of radiityy, showcasing projects, tech stack, and web development journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}