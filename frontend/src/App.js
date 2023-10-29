import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './movies/AddMovie';
import EditMovie from './movies/EditMovie';
import ViewMovie from './movies/ViewMovie';
import BookMovie from './movies/BookMovie';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar/>
        <Routes>
          <Route exact path = "/" element= {<Home/>}/>
          <Route exact path = "/addMovie" element= {<AddMovie/>}/>
          <Route exact path = "/editmovie/:id" element = {<EditMovie/>} />
          <Route exact path = "/viewmovie/:id" element = {<ViewMovie/>} />
          <Route exact path = "/bookmovie/:id" element = {<BookMovie/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

