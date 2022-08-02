package com.boardReact.demo.Service;

import com.boardReact.demo.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.boardReact.demo.repository.BoardRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoard(){
        System.out.println("Service getAll 함수 호출");
        return boardRepository.findAll();
    }

    public Board createBoard(Board board){
        System.out.println("DB 저장 완료");
        return boardRepository.save(board);
    }

    public ResponseEntity<Optional<Board>> getBoard(Integer no) {
       Optional<Board> board = boardRepository.findById(no);
        return ResponseEntity.ok(board);
    }


}


