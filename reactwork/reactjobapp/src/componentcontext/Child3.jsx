import React, { useContext } from "react";
import { mycontext } from "../AppContext";
import Child2 from "./Child2";
function Child3() {
  const recievecontext = useContext(mycontext);
  return (
    <div>
      Child3
      <div>Name:{recievecontext.name}</div>
      <div>Branch:{recievecontext.branch}</div>
    </div>
  );
}

export default Child3;
