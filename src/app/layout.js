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
  description:
    "Leading web and software development and design studio in Bangladesh.",
  keywords: [
    "Best web development company in Dhaka",
    "Best web development company in Bangladesh",
    "react js development",
    "Mahmood Hassan Rameem",
    "MERN stack development",
    "web development",
    "web design",
    "Bangladesh",
    "ROL Studio Bangladesh",
    "Next.js",
  ],
  openGraph: {
    title: "ROL Studio Bangladesh",
    description:
      "Leading web and software development and design studio in Bangladesh.",
    url: "https://rolstudiobangladesh.vercel.app/",
    siteName: "ROL Studio Bangladesh",
    images: [
      {
        url: "https://rolstudiobangladesh.vercel.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "ROL Studio Bangladesh",
  //   description: "Leading web development and design studio in Bangladesh.",
  //   images: ["https://yourdomain.com/twitter-image.jpg"],
  // },
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
