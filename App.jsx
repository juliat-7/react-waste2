// App.js
import React from 'react';
import Header from './Header';
import CombinedHeroComponent from './Hero';
//import Clients from './components/Clients/Clients';
import Aboutus from './Aboutus';
import Whyus from './Whyus';
//import Skills from './components/Skills/Skills';
//import CTA from './components/CTA/CTA';
import FAQ from './FAQ';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CombinedHeroComponent />
      <main id="main">
        <Aboutus />
        <Whyus />
    
        
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

























