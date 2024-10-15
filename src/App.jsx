import {
  Header, 
  Hero, 
  About, 
  Skill, 
  Work, 
  Contact, 
  Footer } from './index';
  import { ReactLenis } from 'lenis/react';
  import { gsap } from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { useGSAP } from '@gsap/react';

  // Register gsap plugins

  gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger:{
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App



