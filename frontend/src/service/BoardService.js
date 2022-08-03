import axios from 'axios'; 


const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL).catch(console.log("데이터받음"));
    }
    
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL, board).catch(console.log("데이터 전송"));
    }
}

export default new BoardService();
