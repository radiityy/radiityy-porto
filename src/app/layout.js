import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "radiityy.",
  description: "Personal portfolio website by Raditya Adin Nugroho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}