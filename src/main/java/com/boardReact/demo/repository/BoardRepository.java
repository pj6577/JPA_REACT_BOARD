package com.boardReact.demo.repository;


import com.boardReact.demo.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

//jpa를 사용할수 있게 해주는 공통 인터페이스
public interface BoardRepository extends JpaRepository<Board, Integer> {

}
