import Blogsection from "@/components/Blogsection";
import Header from "@/components/Header";
import { useState } from "react";
import Head from "next/head";


export default function Home({ blogs }) {
   const [searchQuery, setSearchQuery] = useState("");
  return ( 
    <>
    <Head>
        <title>Horizon Blog | Travel, Culinary & Lifestyle Stories</title>
        <meta
          name="description"
          content="Explore  blog for travel tips,destinations, culinary guides, lifestyle inspiration, and creative insights that fuel your adventures."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="p-2 flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-[1100px] mx-auto bg-white p-3 rounded-xl shadow-md">
         <Header onSearch={setSearchQuery} />
        <Blogsection blogs={blogs} searchQuery={searchQuery}/>
      </div>
    </div>
    </>
  );
}

 export async function getServerSideProps() {
  const res = await fetch("https://6907984eb1879c890eda3c0a.mockapi.io/blogs"); 
  const blogs = await res.json();

  return {
    props: {
      blogs,  
    },
  };
}
