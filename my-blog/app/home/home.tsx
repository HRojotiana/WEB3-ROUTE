import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Home</h1>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
