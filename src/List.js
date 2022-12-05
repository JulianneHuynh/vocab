import React from "react";
import VocabularyCard from "./Card"

function List(){



return (
  <Card.Group itemsPerRow={6}>
    <h1> Urban Academy </h1>
    {/* render card info here */}
  </Card.Group>
);
}

export default List;