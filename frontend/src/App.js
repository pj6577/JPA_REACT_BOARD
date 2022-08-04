
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import UpdateBoardComponent from './components/UpdateBoardComponent';
function App() {

  return (
    <div>
      <Router>             
        <HeaderComponent/>
          <div className="container">
            <Routes>       
              <Route path = "/" element = {<ListBoardComponent/>}></Route>
              <Route path = "/board" element = {<ListBoardComponent/>}></Route>
              <Route path = "/create-board" element = {<CreateBoardComponent/>}></Route>
              <Route path = "/read-board/:no" element = {<ReadBoardComponent/>}></Route>
              <Route path = "/update-board/:no" element = {<UpdateBoardComponent />}></Route>
            </Routes>
          </div>
        <FooterComponent/> 
      </Router>
    </div>
  );
}
export default App;