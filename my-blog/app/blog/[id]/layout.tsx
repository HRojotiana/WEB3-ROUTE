import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const blogs=[
  {
    id:1,
    title:"blog1"
  },
  {
    id:2,
    title:"blog2"
  },
  {
    id:3,
    title:"blog3"
  },
  {
    id:4,
    title:"blog4"
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <div>
      {blogs.map((blog)=>(
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))
      }
    </div>
    <div>
      {children}
    </div>
   </div>
  );
}