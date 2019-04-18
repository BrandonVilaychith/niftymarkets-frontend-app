import React, { useState, useEffect } from "react";
import fakeItems from "../../data/fake.js";
import Card from "./ItemCard.js";
import { Row } from "reactstrap";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(fakeItems);
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      {/* <Row> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
        {items.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* </Row> */}
    </div>
  );
};

export default HomePage;
