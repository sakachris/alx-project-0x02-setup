import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Next.js Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-3xl text-blue-500 font-semibold">
          Welcome to Next.js Setup with TypeScript & Tailwind CSS!
        </h2>
      </main>
    </>
  );
}
