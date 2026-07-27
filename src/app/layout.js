import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Initialize Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "43-B",
  description: "Your centralized hub for routines, deadlines, and course materials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" data-theme="light">
      <body className={`flex min-h-full flex-col ${jakarta.className}`}>
        <Navbar />
        
        {/* Flex-grow ensures the footer stays at the absolute bottom */}
        <div className="flex-grow bg-sky-50">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}