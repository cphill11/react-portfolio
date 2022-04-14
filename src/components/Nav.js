// bar that we see; operates w/ in header that will conditionally render different sections of the portfolio
import React from 'react';

// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';

function Nav() {
  return (
       <header>
         <h2>
           {/* <a href="/"></a> */}
         </h2>
         <nav>
           <ul className="flex-row">
             <li className="mx-2">
               <a href="#about"> About Me</a>
             </li>
             <li>
               <span>Contact</span>
             </li>
           </ul>
         </nav>
       </header>
      );
    }





export default Nav;
