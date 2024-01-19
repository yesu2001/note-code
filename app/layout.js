import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteCode App",
  description: "Share Code easily with NoteCode!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-full bg-gradient-to-br
from-purple-400
to-purple-600"
      >
        {children}
      </body>
    </html>
  );
}
