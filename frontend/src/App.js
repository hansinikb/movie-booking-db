import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './movies/AddMovie';
import EditMovie from './movies/EditMovie';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar/>
        <Routes>
          <Route exact path = "/" element= {<Home/>}/>
          <Route exact path = "/addMovie" element= {<AddMovie/>}/>
          <Route exact path = "/edituse/:id" element = {<EditMovie/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;