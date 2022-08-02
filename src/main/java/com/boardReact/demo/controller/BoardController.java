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
@RequestMapping("/api")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @CrossOrigin
    @RequestMapping(value = "/board", method = RequestMethod.GET)
    public List<Board> getAllBoards(){
        System.out.println("getAllBoards 컨트롤러 도착");
        return boardService.getAllBoard();
    }

    @PostMapping("/board/create-board")
    public Board createBoard(@RequestBody Board board){
        System.out.println("creatBoard 컨트롤러 도착");
        return boardService.createBoard(board);
    }

    @RequestMapping(value = "/read-board/{no}", method = RequestMethod.GET)
    public ResponseEntity<Optional<Board>> getBoardByNo(@PathVariable Integer no){
        System.out.println("getBoard 컨트롤러 도착");
        return boardService.getBoard(no);
    }
}
