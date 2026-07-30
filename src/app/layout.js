import "./globals.css";
import Navbar from "@/components/Navbar";
import IntroScreen from "@/components/IntroScreen";

export const metadata = {
  title: {
    default: "Raditya Adin Nugroho - Web Developer",
    template: "%s | radiityy.",
  },
  description: "Personal portfolio website by Raditya Adin Nugroho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IntroScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}