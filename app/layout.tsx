import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import { Header } from "./layout/Header/Header";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Footer } from "./layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Проект на Next",
  description: "Learning project",
};

const noto_sans = Noto_Sans({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto_sans.className}>
      <head></head>
      <body className={inter.className}>
        <>
          <Header />
          <div>
            <Sidebar />

            <div>{children}</div>
          </div>
          <Footer />
        </>
      </body>
    </html>
  );
}
