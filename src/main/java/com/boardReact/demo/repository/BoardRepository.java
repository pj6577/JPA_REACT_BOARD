package com.boardReact.demo.repository;


import com.boardReact.demo.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

}
