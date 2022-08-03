
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';

function App() {

  return (
    <div>
      <Router>             
        <HeaderComponent/>
          <div className="container">
            <Routes>       
              <Route path = "/" exact element = {<ListBoardComponent/>}></Route>
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
