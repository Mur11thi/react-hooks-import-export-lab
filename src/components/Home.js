import React from "react";
import {username}  from "./user.js"
import{city} from "./user.js"
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home
