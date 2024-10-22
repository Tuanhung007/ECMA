import React from "react";
import { Link } from "react-router-dom";

const ListPro = ({ products, onDel }) => {
  //   console.log(products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>stt</th>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>acton</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>
                <button onClick={() => onDel(item.id)}>del</button>
                <Link to={`edit/${item.id}`}>edit</Link>
                <Link to={`details/${item.id}`}>detals</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPro;
