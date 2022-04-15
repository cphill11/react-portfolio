// App.js is the center of the application (root component / wrapper component that houses all of the other components)

// to effect change on the application, we need to either modify this file or add components inside of it

import React from "react";
// PortfolioContainer has all the page imports listed there; this minimizes the load on App.js; useful pattern to replicate when working w/ multiple devs
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";


function App() {
  // const [categories] = useState([
  //   // {
  //   //   name: "Resume",
  //   //   description: "Listing of skillsets useful for employment opportunities",
  //   // },
  //   // {
  //   //   name: "Portfolio",
  //   //   description: "Challenges and Projects completed during coding bootcamp",
  //   // },
  // ]);


  return (
    <div>
      <Nav>

      </Nav>
      <main>
  
          <>
            <About></About>

          </>
        ) : (
          <ContactForm></ContactForm>
          )
        <Footer />
      </main>
    </div>
  );
}

export default App;
