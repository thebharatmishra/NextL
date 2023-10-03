import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="{inter.className} flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
