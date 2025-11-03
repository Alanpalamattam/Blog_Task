import Blogsection from "@/components/Blogsection";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home({ blogs }) {
   const [searchQuery, setSearchQuery] = useState("");
  return ( 
    <div className="p-2 flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-[1100px] mx-auto bg-white p-3 rounded-xl shadow-md">
         <Header onSearch={setSearchQuery} />
        <Blogsection blogs={blogs} searchQuery={searchQuery}/>
      </div>
    </div>
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
