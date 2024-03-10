// pages/blog/[id].tsx
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import Link from 'next/link';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <BlogList />
        <h1>Blog-{id}</h1>
        <Link href={`/blog/${id}/image`}>
          <a>Voir l'image</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
