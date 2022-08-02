import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BoardService from '../service/BoardService';

const ListBoardComponent = () => {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardService.getBoards().then((resonse) => {
            setBoards(resonse.data);
        });
    }, []);
    return (
        <div>
            <h2 className='text-center'>Board List</h2>
            <div className='row'>
                <button className='btn btn-primary' onClick={()=>{navigate("/create-board")}}>글작성</button>
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
                        {boards.map((board)=>(
                          // navigate 상세 주소로 수정
                            <tr onClick={()=>{navigate("/read-board/"+board.no ,{state:{
                                no : board.no,
                                title : board.title,
                                memberNo : board.memberNo,
                                createdTime : board.createdTime,
                                updatedTime : board.updatedTime,
                                likes : board.likes,
                                counts: board.counts }
                            })}} key ={board.no}>
                            <td>{board.no}</td>
                            <td>{board.title}</td>
                            <td>{board.memberNo}</td>
                            <td>{board.createdTime}</td>
                            <td>{board.updatedTime}</td>
                            <td>{board.likes}</td>
                            <td>{board.counts}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    );
};

export default ListBoardComponent;