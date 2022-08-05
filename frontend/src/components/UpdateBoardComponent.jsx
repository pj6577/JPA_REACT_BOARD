import React, { useState,  } from 'react';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import BoardService from '../service/BoardService';

const UpdateBoardComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {no} = useParams();
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [inputMemberNo, setInputMemberNo] = useState('');

  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  }
  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  }
  // 3.
  const changeMemberNoHandler = (event) => {
    setInputMemberNo(event.target.value);
  }
  
  const updateBoard = (e) => {
    e.preventDefault();
    const board = {
      no : no,
      title: inputTitle,
      contents: inputContent,
      memberNo: inputMemberNo
    }
    console.log("board=>" + JSON.stringify(board));
    BoardService.updateBoard(board, no).then(res => {
      navigate('/board')
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">게시물 수정</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Type </label>
                  <select placeholder="type" name="type" className="form-control">
                    <option value="1">자유게시판</option>
                    <option value="2">질문과 답변</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Title </label>
                  <input type="text" placeholder="title" name="title" className="form-control"
                    value={inputTitle} onChange={changeTitleHandler} />
                </div>
                <div className="form-group">
                  <label> Contents  </label>
                  <textarea placeholder="contents" name="content" className="form-control"
                    value={inputContent} onChange={changeContentsHandler} />
                </div>
                <div className="form-group">
                  <label> MemberNo  </label>
                  <input placeholder="memberNo" name="memberNo" className="form-control"
                    value={inputMemberNo} onChange={changeMemberNoHandler} />
                </div>
                <button className="btn btn-success" onClick={updateBoard}>Save</button>
                <button className="btn btn-danger" onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default UpdateBoardComponent;