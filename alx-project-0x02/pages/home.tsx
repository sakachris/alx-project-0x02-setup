import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | NextJS Project</title>
      </Head>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Getting Started"
            content="Learn how to scaffold and structure a Next.js project with TypeScript and Tailwind CSS."
          />
          <Card
            title="Routing Basics"
            content="Understand how to use the Pages Router in Next.js to navigate between pages."
          />
          <Card
            title="Reusable Components"
            content="Build reusable UI components with props to keep your code clean and maintainable."
          />
        </div>
      </main>
    </>
  );
}
