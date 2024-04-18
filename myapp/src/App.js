import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Endpage from './components/endpage';
import './App.css';

function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path = '/' Component={Home}/>
          <Route path = '/endpage' Component={Endpage}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
