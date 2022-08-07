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
        return axios.get(BOARD_API_BASE_URL+"/read-board/" + no);
    }
    updateBoard(board){
        return axios.post(BOARD_API_BASE_URL+"/update-board/", board);
    }

    DeleteBoard(board){
        return axios.post(BOARD_API_BASE_URL+/delete-board/, board);
    }

}

export default new BoardService();