import React from "react";
import "./App.css";
import User from "./components/User";
export const url = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is from App component</p>
        <User url={url}/>
      </header>
    </div>
  );
};

export default App;