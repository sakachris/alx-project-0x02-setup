import Head from "next/head";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | NextJS Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
}
