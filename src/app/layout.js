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

// Yahan metadata mein icons add kar diya hai
export const metadata = {
  title: "Alhawat Medical Store",
  description: "Medical Equipment & Healthcare Products",
  icons: {
    icon: "/logo.png", // Aapka logo file path
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}