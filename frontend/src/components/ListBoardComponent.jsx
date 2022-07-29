import React, { Component } from 'react';
import BoardService from "../service/BoardService";
import CreateBoardComponent from './CreateBoardComponent';


class ListBoardComponent extends Component {
  
    constructor(props){
      super(props)
      //1.
      this.state={
        boards:[]
      }
      this.createBoard = this.createBoard.bind(this);
    }
    2.
    componentDidMount(){
      BoardService.getBoards().then((res)=>{
        console.log(res.data);
        this.setState({boards: res.data});
      }).catch(function(err){console.log(err)});
    }
    
    createBoard(){
      this.props.histoy.push("/create-board");
    }
    
  render() {
    return (
      <div>
        <h2 className='text-center'>Board List</h2>
        <div className='row'>
          
          <button className='btn btn-primary' onClick={this.createBoard}>글작성</button>
      
        </div>  
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>글 번호</th>
                <th>타이틀</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>갱신일</th>
                <th>좋아요 수</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.boards.map(
                  board =>
                  <tr key={board.no}>
                    <td>{board.no}</td>
                    <td>{board.title}</td>
                    <td>{board.memberNo}</td>
                    <td>{board.createdTime}</td>
                    <td>{board.updatedTime}</td>
                    <td>{board.likes}</td>
                    <td>{board.counts}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBoardComponent;