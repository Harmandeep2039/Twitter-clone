import React from "react";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StatePovider";

function App() {
   // BEM naming convention
 const [{user },dispatch] = useStateValue();
  return(
    <div className="app">
      {!user ? (
        <Login />
      ) : (
    <>
       <Sidebar />
      <Feed />
      <Widgets />
    </>
  )}
  </div>
  );
}

export default App;
