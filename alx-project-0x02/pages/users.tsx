import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps, type UsersPageProps } from "@/interfaces";

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users | NextJS Project</title>
      </Head>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        {users.length === 0 ? (
          <p className="text-gray-600">No users available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

// Fetch users at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
      props: {
        users: data,
      },
      revalidate: 60, // ISR: refresh data every 60s
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
