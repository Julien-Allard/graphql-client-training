import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import allRoutes from './common/routes';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
   return (
      <Router>
         <div className="main-container">
            <Navbar />
            <Routes>
               {allRoutes.map((route, index) => (
                  <Route path={route.path} element={route.element} key={index} />
               ))}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
