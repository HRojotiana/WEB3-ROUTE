import React from "react";
import Link from "next/link";
const HomePage = () => {
  const blogList = [
    {
      id: 1,
      title: "blog1"
    },
    {
      id: 2,
      title: "blog2"
    },
    {
      id: 3,
      title: "blog3"
    }
  ]
  return (
    <div>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
