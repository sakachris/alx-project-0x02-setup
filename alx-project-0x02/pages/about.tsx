import Head from "next/head";
import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | NextJS Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">About This Project</h1>
      </main>
    </>
  );
}
