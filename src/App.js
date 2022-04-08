// mother board; start here

import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <NavTabs />
      <About />
      <Work />
      <Resume />
      <Contact />
      <Footer />
  
    </div>
  );
}








export default App;
