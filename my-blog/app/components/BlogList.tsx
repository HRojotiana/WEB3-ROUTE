// components/BlogList.tsx
import Link from 'next/link';

const blogs = [
  { id: 1, title: 'Blog 1' },
  { id: 2, title: 'Blog 2' },
  // Ajoutez plus de blogs ici
];

const BlogList = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <a>{blog.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
