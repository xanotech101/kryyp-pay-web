'use client'
import Hero from '../component/landingpage/hero';
import Trusties from '../component/landingpage/trusties';
import About from '../component/landingpage/about';
import Features from '../component/landingpage/features';
import Services from '../component/landingpage/services';
import Faq from '../component/landingpage/faq'
import Footer from '../component/footer/footer'
import Nav from '../component/nav/nav';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Nav />
      <div id="hero">
         <Hero />
      </div>
     
     <div id="trusties" >
        <Trusties />
      </div>
      <div id="about" >
      <About />
      </div>
      <div id="features" >
      <Features />
      </div>
      <div id="services">
      <Services />
      </div>
      <div id="faq" >
      <Faq />
      </div>
      <div id='footer' >
      <Footer />  
      </div>
    </div>
  );
}
