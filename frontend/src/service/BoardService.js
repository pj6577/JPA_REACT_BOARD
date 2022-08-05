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
<<<<<<< HEAD
    updateBoard(no, board){
        return axios.put(BOARD_API_BASE_URL+"/update-board/"+no, board);
=======
    updateBoard(board){
        console.log("서비스도착")
        return axios.post(BOARD_API_BASE_URL+"/update-board/", board);
>>>>>>> ddd4592f8dcc68ea3ed6e554b300550934399c8a
    }

}

export default new BoardService();
