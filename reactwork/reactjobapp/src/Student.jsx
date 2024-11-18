import React from "react";
import "./Student.css";
function Student({ data }) {
  return (
    <div className="icard">
      {/* {JSON.stringify(data)} */}
      <table>
        <tbody>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <td colspan={2}>{data.college}</td>
          </tr>
          <tr>
            <td colspan={2}>
              {" "}
              <img src={data.pic} height={100} width={180} />
            </td>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Roll_Number: </td>
            <td>{data.roll}</td>
          </tr>
          <tr>
            <td>Branch: </td>
            <td>{data.branch}</td>
          </tr>
          <tr>
            <td>Section: </td>
            <td>{data.section}</td>
          </tr>
          <tr>
            <td>Admission_no.: </td>
            <td>{data.admission}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
