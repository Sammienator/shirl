
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Display from './components/Display';

function App() {
  return (
    <div>
       <Navbar />

        <Hero/>

        <Features/>

        <Display />

        <Testimonial />

        <Cta />

        <Footer/>

    </div>
   
  );
}

export default App;
