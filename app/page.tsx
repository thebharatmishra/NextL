import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a className="absolute top-4 left-4" href="/about">
        About
      </a>
      <h1 className="text-5xl">Home Page</h1>
    </main>
  );
}
