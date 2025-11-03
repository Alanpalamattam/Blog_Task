import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://6907984eb1879c890eda3c0a.mockapi.io/blogs/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  return (
    <article className="max-w-3xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
      >
        ← Back to Home
      </button>

      <Image
        src={
          post.blogimage.startsWith("http")
            ? post.blogimage
            : `/${post.blogimage}`
        }
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-4 w-full h-80 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">By {post.author}</p>
      <p className="text-lg leading-relaxed text-gray-700">
        {post.content} Welcome to our blog — a space where stories, ideas, and
        inspiration come together. From travel destinations and culinary
        delights to lifestyle tips and creative insights, we bring you
        thoughtfully written articles designed to inform, inspire, and spark
        curiosity. Dive in and explore a world of experiences, knowledge, and
        imagination — all in one place.
      </p>
    </article>
  );
}
