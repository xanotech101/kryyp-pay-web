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
    <div>
      <Hero />
      <Trusties />
      <About />
      <Features />
      <Services />
      <Faq />
      <Footer />  
    </div>
  );
}
