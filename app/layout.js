import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
