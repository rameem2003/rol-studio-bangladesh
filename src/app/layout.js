import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import BottomBanner from "@/components/common/BottomBanner";
import Footer from "@/components/common/Footer";

const montserat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "ROL Studio Bangladesh - Web Development & Design",
  description: "Leading web development and design studio in Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserat.variable} bg-background antialiased font-monserat`}
      >
        <Navigation />
        {children}
        <BottomBanner />
        <Footer />
      </body>
    </html>
  );
}
