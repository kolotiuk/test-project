// import UserRoutes from 'UserRoutes';
// import About from './components/About';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ProjectsPage from 'pages/ProjectsPage';

const App = () => {
  return (
    <>
      {/* <HomePage /> */}
      {/* <nav> */}
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/projects">projects</Link> */}
      {/* </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectsPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
    // <div className="container">
    //   <Hero />
    //   <About />
    //   <Projects />
    // </div>
  );
};

export default App;
