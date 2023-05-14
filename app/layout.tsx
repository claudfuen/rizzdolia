import "./globals.css";
import { Comic_Neue } from "next/font/google";
import { Providers } from "./providers";

const inter = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["Comic Sans MS", "cursive"],
});

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
