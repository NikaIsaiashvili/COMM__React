import User from "./User";
import { useState } from "react";
const apiCall = "https://randomuser.me/api";

function Main() {
  const [userInfo, setUserInfo] = useState([]);

  function loadUserInfo() {
    fetch(apiCall)
      .then((respones) => respones.json())
      .then((data) => setUserInfo([...userInfo, data.results[0]]));
  }
  return (
    <main className="container">
      <div className="dashboard">
        <User userInfo={userInfo} />
      </div>
      <button className="button" onClick={loadUserInfo}>
        {" "}
        Next User{" "}
      </button>
    </main>
  );
}

export default Main;
