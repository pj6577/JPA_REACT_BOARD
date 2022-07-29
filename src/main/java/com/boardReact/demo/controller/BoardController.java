package com.boardReact.demo.controller;

import com.boardReact.demo.Service.BoardService;

import com.boardReact.demo.model.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @PostMapping("/board/create")
    public Board createBoard(@RequestBody Board board){
        return boardService.createBoard(board);
    }

}
