import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const Blogsection = ({ blogs = [], searchQuery = "" }) => {
  const categories = [
    "All",
    "Destination",
    "Culinary",
    "Lifestyle",
    "Tips & Hacks",
  ];
  const [sortOption, setSortOption] = useState("Newest");
  const [activeCategory, setCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    let filtered =
      activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          blog.content.toLowerCase().includes(query) ||
          blog.category.toLowerCase().includes(query)
      );
    }

    if (sortOption === "Popular") {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes);
    } else {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    return filtered;
  }, [activeCategory, sortOption, blogs, searchQuery]);

  return (
    <div className="flex flex-col p-4 mt-3">
      <h2 className="text-2xl font-medium">Blog</h2>
      <h4 className="text-[14px] mt-2 text-gray-400">
        Here, we share tips, destination guides, and stories that inspire your
        next adventure.
      </h4>

      <div className="flex flex-row justify-between mt-3 flex-wrap gap-3">
        <div className="flex flex-row gap-3 flex-wrap">
          {categories.map((x, index) => (
            <div
              key={index}
              className={`text-[12px] font-semibold p-1.5 px-4 rounded-[3px] cursor-pointer ${
                activeCategory === x ? "bg-gray-200" : ""
              }`}
              onClick={() => setCategory(x)}
            >
              {x}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <div className="text-[13px] text-gray-400 mr-2">Sort by:</div>
          <select
            className="p-2 pl-4 pr-4 bg-white shadow text-[13px] font-semibold"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Newest">Newest</option>
            <option value="Popular">Popular</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-5">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Link key={blog.id} href={`/post/${blog.id}`}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={blog.blogimage}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-gray-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    {blog.date} • {blog.readTime}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <Image
                      src="/assets/meny.jpeg"
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <p className="text-sm font-medium text-gray-800">
                      {blog.author}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No blog posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogsection;
