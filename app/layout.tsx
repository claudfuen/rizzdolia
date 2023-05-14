import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rizzdolia",
  description: "Get your infinite here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          fontFamily: "Comic Sans MS, cursive",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
