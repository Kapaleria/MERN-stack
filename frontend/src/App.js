import {BrowserRouter, Route, Routes} from 'react-router-dom';
//pages and components

import Home from './pages/Home';
import Navbar from './components/Navbar';
 
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      {//everything that needs to use the routing system
}
<Navbar/>

      <div className ="pages">
        <Routes>
          <Route
          path="/"
          element={<Home/>}
          />
        </Routes>
      </div>
    

      </BrowserRouter>
      
    </div>
  );
}

export default App;
