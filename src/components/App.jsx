import About from './About';
import Hero from './Hero';
import Projects from './Projects/Projects';

const App = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
