import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Header } from "./layout/Header/Header";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Footer } from "./layout/Footer/Footer";
import styles from "./Layout.module.css";
import { Up } from "./components/Up/Up";

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
      <body>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />

          <div className={styles.body}>{children}</div>
          <Footer className={styles.footer} />
          <Up />
        </div>
      </body>
    </html>
  );
}
