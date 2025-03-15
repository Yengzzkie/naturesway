import { Geist, Geist_Mono } from "next/font/google";
import Navlinks from "./components/Navlinks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <div className="sticky top-0 h-screen overflow-y-auto px-4">
          <Navlinks />
        </div> */}
        <main className="overflow-auto">{children}</main>
      </body>
    </html>
  );
}
