import axios from 'axios'; 


const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL).catch(console.log("데이터받음"));
    }
    
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL+"/create-board", board);
    }

    DetailBoards(no){
        return axios.get(BOARD_API_BASE_URL+"/" + no);
    }
}

export default new BoardService();
