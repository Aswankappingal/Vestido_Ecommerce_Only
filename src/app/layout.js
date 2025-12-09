import { Outfit } from "next/font/google";
import "./globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "VESTIDO | Futuristic Fashion",
  description: "Advanced dark theme clothing brand.",
};

import SmoothScroll from "../components/SmoothScroll/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="noise"></div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
