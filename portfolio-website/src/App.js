import './App.css';
import HeaderNav from './components/HeaderNav';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <HeaderNav/>
      <Intro />
      <About />      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
