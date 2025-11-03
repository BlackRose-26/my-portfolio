import { use, useState } from 'react';
import './index.css';
import { Loadingscreen } from './components/Loadingscreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Project } from './components/section/Project';
import { Contact } from './components/section/Contact';
  

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <>
    {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={'min-h-screen transition-opacity duration-700 ${} text-gray-100'}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      
      </div>
      </>
  );
}

export default App
