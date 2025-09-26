import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <div className="flex space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Small Button" size="small" shape="rounded-md" />
          <Button label="Small Button" size="small" shape="rounded-full" />
        </div>
        <div className="flex space-x-4">
          <Button label="Medium Button" size="medium" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Medium Button" size="medium" shape="rounded-full" />
        </div>
        <div className="flex space-x-4">
          <Button label="Large Button" size="large" shape="rounded-sm" />
          <Button label="Large Button" size="large" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
