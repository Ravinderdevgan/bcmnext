import "./globals.css";
import ScrollToTop from "@/components/scrolltop";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export const metadata = {
  title: "Brandscare Media",
  description: "Brandscare Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
