import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BoardService from '../service/BoardService';


const ListBoardComponent = () => {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardService.getBoards().then((res) => {
            setBoards(res.data);
        });
    }, []);
    return (
        <div>
            <h2 className='text-center'>Board List</h2>
            <div className='row'>
                <button className='btn btn-primary' onClick={()=>{navigate("./CreateBoardComponent")}}>글작성</button>
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
                        {boards.map((boards)=>{
                          // navigate 상세 주소로 수정
                            <tr onClick={()=>{navigate("./CreateBoardComponent", {state:{
                                no : boards.no,
                                title : boards.title,
                                member_no : boards.member_no,
                                created_time : boards.created_time,
                                updated_time : boards.updated_time,
                                likes : boards.likes,
                                counts: boards.counts }
                            })}} key ={boards.no}>
                            <td>{boards.no}</td>
                            <td>{boards.title}</td>
                            <td>{boards.member_no}</td>
                            <td>{boards.created_time}</td>
                            <td>{boards.updated_time}</td>
                            <td>{boards.likes}</td>
                            <td>{boards.counts}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
            </div>
        </div>
    );
};

export default ListBoardComponent;