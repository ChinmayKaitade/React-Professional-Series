import React from "react";
import Card from "./Cards";

function TourList({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Tours With Plan</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
      <div className="footer">
        <h3>© 2024 ChinmayKaitade | All Rights Reserved.</h3>
      </div>
    </div>
  );
}

export default TourList;
