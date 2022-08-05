import axios from 'axios'; 


const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL+"/create-board", board);
    }

    DetailBoards(no){
        return axios.get(BOARD_API_BASE_URL+"/" + no);
    }
    updateBoard(no, board){
        return axios.put(BOARD_API_BASE_URL+"/update-board/"+no, board);
    }

}

export default new BoardService();
