'use client'
import Hero from '@/Components/landingpage/hero';
import Trusties from '@/Components/landingpage/trusties';
import About from '@/Components/landingpage/about';
import Features from '@/Components/landingpage/features';
import Services from '@/Components/landingpage/services';
import Faq from '@/Components/landingpage/faq'
import Footer from '@/Components/Footer/footer'

export default function Home() {
  return (
    <div className="scroll-smooth">
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
