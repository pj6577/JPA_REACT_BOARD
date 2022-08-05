package com.boardReact.demo.controller;

import com.boardReact.demo.Service.BoardService;

import com.boardReact.demo.model.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    private BoardService boardService;

    //CrossOrigin COR(S) 웹페이지의 제한된 자원을 외부 도메인에서
    //접근을 허용해주는 메커니즘
    //서로 다른 도메인에서 리소스를 공유하게한다

    //글 전체 출력
    //board url로 넘어온 값을 boardservice에 getAllboard를 호출해서 리턴함
    @CrossOrigin
    @RequestMapping(value = "/board", method = RequestMethod.GET)
    public List<Board> getAllBoards(){
        System.out.println("getAllBoards 컨트롤러 도착");
        return boardService.getAllBoard();
    }

    //글 작성
    //PostMapping으로 /create-board로 부터 데이터가 전송되면
    //RequestBody Board board로 body 객체를 생성한다
    //생성한 객체를 boardService.createBoard로 리턴한다
    @PostMapping("/board/create-board")
    public Board createBoard(@RequestBody Board board){
        System.out.println("creatBoard 컨트롤러 도착");
        return boardService.createBoard(board);
    }



    //글 상세보기 
    //read-board/{no} 로 no 글 번호가 적힌 글로부터 호출이 오면
    //boardService.getBoard로 글 번호(no)를 리턴한다
    @RequestMapping(value = "/read-board/{no}", method = RequestMethod.GET)
    public ResponseEntity<Optional<Board>> getBoardByNo(@PathVariable Integer no){
        System.out.println("getBoard 컨트롤러 도착");
        return boardService.getBoard(no);
    }

    //update
    @RequestMapping(value = "/board/update-board/", method = RequestMethod.POST)
    public ResponseEntity<Board> updateBoardByNo(
            @RequestBody Board board){
        System.out.println("update url 맞음");
        return boardService.updateBoard(board);
    }
}
