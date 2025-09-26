import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps, type PostsPageProps } from "@/interfaces";

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts | NextJS Project</title>
      </Head>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=27"
    );
    const data = await res.json();

    const formattedPosts: PostProps[] = data.map((post: any) => ({
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));

    return {
      props: {
        posts: formattedPosts,
      },
      revalidate: 60, // ISR: re-build the page every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Header from "@/components/layout/Header";
// import PostCard from "@/components/common/PostCard";
// import { type PostProps } from "@/interfaces";

// export default function PostsPage() {
//   const [posts, setPosts] = useState<PostProps[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?_limit=27"
//         );
//         const data = await res.json();
//         const formattedPosts: PostProps[] = data.map((post: any) => ({
//           title: post.title,
//           content: post.body,
//           userId: post.userId,
//         }));
//         setPosts(formattedPosts);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Posts | NextJS Project</title>
//       </Head>
//       <Header />
//       <main className="p-8 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

//         {posts.length === 0 ? (
//           <p className="text-gray-600">Loading posts...</p>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {posts.map((post, index) => (
//               <PostCard
//                 key={index}
//                 title={post.title}
//                 content={post.content}
//                 userId={post.userId}
//               />
//             ))}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }
