import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "radiityy — Portfolio",
  description:
    "Personal portfolio website of Radiit — mahasiswa dan web developer dari Kutoarjo.",
  openGraph: {
    title: "radiityy — Portfolio",
    description: "Personal portfolio website of Radiit.",
    url: "https://radiityy.vercel.app",
    siteName: "radiityy",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "radiityy — Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}