import axios from 'axios'; 


const BOARD_API_BASE_URL = "/api/board";

class BoardService {


    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL);
    }
}

export default new BoardService();
