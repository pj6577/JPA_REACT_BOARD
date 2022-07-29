import React, { Component } from 'react';

class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers().then(res => {
      this.setState({
        users: res.data
      })
    })
      .catch(err => {
        console.log("로그인중 에러", err);
      })
  }

  // 37번 줄 null이 아닌 어설션은 TypeScript 파일에서만 사용할 수 있습니다.ts(8013)
  // deletUser = (userID) => {
  //   ApiService.deletUser(userID)
  //     .then(res => {
  //       this.setState({
  //         message: "유저 삭제 성공"
  //       });
  //       this.setState({
  //         users: this.state.users.filter(user =>
  //           user.id ! ==userID)
  //       });
  //     })
  //     .catch(err=>{
  //       console.log("유저 삭제중 에러"), err;
  //     })
  // }

  editUser =(ID) =>{
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/edit-user');
  }

  addUser =()=>{
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/add-user');
  }
  render() {
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.addUser}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user=>
              <tr key ={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>
                  <button onClick={()=> this.editUser(user.id)}>Edit</button>
                  <button onClick={()=> this.deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserListComponent;