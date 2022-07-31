
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import { navigate } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>             
        <HeaderComponent/>
          <div className="container">
            <Routes>       
              <Route path = "/" element = {<ListBoardComponent/>}></Route>
              <Route path = "/board" element = {<ListBoardComponent/>}></Route>
              <Route path = "/CreateBoardComponent" element = {<CreateBoardComponent/>}></Route>
            </Routes>
          </div>
        <FooterComponent/> 
      </Router>
    </div>
  );
}

export default App;
