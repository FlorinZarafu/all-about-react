import React from "react";
import Columns from "./columns.component";

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
