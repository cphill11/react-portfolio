// mother board; start here

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Resume />
      <Contact />
      <Footer />
  
    </div>
  );
}

export default App;
