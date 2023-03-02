import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
   return (
      <div className="navbar-main-container">
         <ul className="links-list">
            <li>
               <Link to="/">Landing</Link>
            </li>
            <li>
               <Link to="/characters">Characters</Link>
            </li>
            <li>
               <Link to="/episodes">Episodes</Link>
            </li>
            <li>
               <Link to="/locations">Locations</Link>
            </li>
         </ul>
      </div>
   );
}
