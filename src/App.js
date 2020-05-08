import React from "react";
import "./App.css";
import formatDistance from "date-fns/formatDistance";
import ReactTable from "react-table";
function App() {
  const data = [
    {
      name: "A",
      age: 12,
    },
  ];
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={2}
          pageSizeOptions={[2, 4, 6]}
        />
      </header>
    </div>
  );
}

export default App;
