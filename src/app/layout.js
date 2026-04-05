import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
});

export const metadata = {
  title: "Alhawat Medical Store",
  description: "Medical Equipment & Healthcare Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Humne Roboto ko default class bana diya hai */}
      <body className={roboto.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}