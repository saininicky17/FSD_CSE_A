import React, { createContext } from "react";
import Child1 from "./componentcontext/Child1";
import Child3 from "./componentcontext/Child3";
import Child2 from "./componentcontext/Child2";
const mycontext = createContext();
function AppContext() {
  const data = {
    name: "Nikhil",
    branch: "ECE",
  };
  return (
    <div>
      AppContext
      <mycontext.Provider value={data}>
        <Child3 />
        <Child2 />
      </mycontext.Provider>
    </div>
  );
}
export { mycontext };

export default AppContext;
