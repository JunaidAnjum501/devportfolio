import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;