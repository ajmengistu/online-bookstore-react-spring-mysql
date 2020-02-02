import React from "react";
import axios from "axios";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/greeting").then(response => {
      const users = response.data;
      this.setState({ users });
      console.log(users);
    });
  }
  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => (
          <li key={index}>{user.firstName}</li>
        ))}
      </ul>
    );
  }
}

export default User;
