import React, { useState } from "react";
import data from "./data";
import TourList from "./Component/TourList";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button
          className="btn-white"
          onClick={() => {
            setTours(data);
          }}
        >
          <span className="btn-text">Refresh</span>
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <TourList tours={tours} removeTour={removeTour}></TourList>
    </div>
  );
}

export default App;
