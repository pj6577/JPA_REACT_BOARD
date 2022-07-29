package com.boardReact.demo.Service;

import com.boardReact.demo.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.boardReact.demo.repository.BoardRepository;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoard(){
        System.out.println("Service getAll 함수 호출");
        return boardRepository.findAll();
    }

    public Board createBoard(Board board){
        return boardRepository.save(board);
    }

}
