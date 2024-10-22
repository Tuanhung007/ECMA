import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ products }) => {
  const { id } = useParams();
  const index = products.find((item) => item.id == id);

  return (
    <div>
      <h1>{index?.name}</h1>
      <img src={index?.price} alt="" />
      <h3>{index?.price}</h3>
    </div>
  );
};

export default Details;
