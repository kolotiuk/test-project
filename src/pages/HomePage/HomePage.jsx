import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
