import { Inter } from "next/font/google";
// import type { Metadata } from "next";
// Naming <name>.modules.css as your css file makes it
// import styles from "./styles.module.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "About",
//   description: "THis is about page of this website",
// };

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ${inter.className} flex min-h-screen flex-col items-center justify-between p-24 ">
      {children}
    </main>
  );
}
