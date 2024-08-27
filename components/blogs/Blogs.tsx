import { blogs } from "@/dummy-data/data";
import React from "react";
import { Blog } from "./Blog";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex gap-4 container flex-wrap justify-center">
      {blogs.map((b) => (
        <Link href={`/blog/${b.id}`}>
          <Blog
            key={b.id}
            title={b.title}
            description={b.description}
            writtenBy={b.writtenBy}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
