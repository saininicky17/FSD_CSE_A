import React from "react";

function Child3({ child3data }) {
  return (
    <div>
      Child3
      <div>
        Name: {child3data.name}
        <br></br>
        Branch:{child3data.branch}
        <br></br>
        Section:{child3data.section}
      </div>
    </div>
  );
}

export default Child3;
