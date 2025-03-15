import React from "react";

function Header({ setFilter }) {
  return (
    <div className="header">
      <h1>To-Do List</h1>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
    </div>
  );
}

export default Header;
