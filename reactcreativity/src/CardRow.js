import React from "react";
import {  Card,  } from 'semantic-ui-react'
import arsa from './images/elliot.jpg'



function CardRow() {
  const cardData = [
    {
      id: 1,
      header: "Card 1",
      meta: "Friend",
      description:
        "Elliot is a sound engineer living in Nashville ",
    },
    {
      id: 2,
      header: "Card 2",
      meta: "Friend",
      description:
        "Elliot is a sound engineer living in Nashville ",
    },
    {
      id: 3,
      header: "Card 3",
      meta: "Friend",
      description:
        "Elliot is a sound engineer living in Nashville ",
    },
    {
      id: 4,
      header: "Card 4",
      meta: "Friend",
      description:
        "Elliot is a sound engineer living in Nashville ",
    },
  ];

  return (
    <div className="container card-row">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-3">
            <Card
              image={arsa}
              header={card.header}
              meta={card.meta}
              description={card.description}
              className="custom-card"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRow;