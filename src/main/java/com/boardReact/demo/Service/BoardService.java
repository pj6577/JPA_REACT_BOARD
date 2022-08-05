package com.boardReact.demo.Service;

import com.boardReact.demo.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.boardReact.demo.repository.BoardRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    //findAll() jpa 메서드를 통해 DB에 저장된 데이터를 모두 출력
    public List<Board> getAllBoard(){
        System.out.println("Service getAll 함수 호출");
        return boardRepository.findAll();
    }

    // SAVE(board) 메서드를 이용해 파라미터로 들어온 board를 save함.
    public Board createBoard(Board board){
        System.out.println("DB 저장 완료");
        return boardRepository.save(board);
    }

    //상세보기를 위한 메서드로 파라미터로 넘어온 게시물 no를
    //findById(no)로 해당하는 no를 찾아 리턴함
    //<Optional>은 null point exception 방지를 위함
    public ResponseEntity<Optional<Board>> getBoard(Integer no) {
        Optional<Board> board = boardRepository.findById(no);
        return ResponseEntity.ok(board);
    }

    //update
    public ResponseEntity<Board> updateBoard(
            Board updateBoard){
        System.out.println("updateBoard 서비스 도착");
        int no = updateBoard.getNo();
        Board board = boardRepository.findById(no).orElseThrow(()->
                new IllegalArgumentException("해당 글 없음. " + no));
        board.setTitle(updateBoard.getTitle());
        board.setContents(updateBoard.getContents());
        board.setUpdatedTime(new Date());

        Board endUpdatedBoard = boardRepository.save(board);
        return ResponseEntity.ok(endUpdatedBoard);
    }


    //delete


}


