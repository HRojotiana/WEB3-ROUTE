// pages/blog/[id]/image.tsx
import { useRouter } from 'next/router';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BlogList from '@/app/components/BlogList';

const BlogImagePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <BlogList />
        <h1>Blog-{id}</h1>
        <img src={`https://picsum.photos/200?random=${id}`} alt="Random" />
      </main>
      <Footer />
    </div>
  );
};

export default BlogImagePage;
