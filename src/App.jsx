import {
  Header, 
  Hero, 
  About, 
  Skill, 
  Work, 
  Contact, 
  Footer } from './index';
  import { ReactLenis } from 'lenis/react';

const App = () => {

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



