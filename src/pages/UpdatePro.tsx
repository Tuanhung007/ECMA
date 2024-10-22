import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdatePro = ({ onUpdate, errorList, products, validate }) => {
  const [product, setProduct] = useState({});

  const DetailsErros = errorList.map((item) => {
    return { name: item.context.key, message: item.message };
  });
  //   console.log(DetailsErros);
  const { id } = useParams();
  //   console.log(id);

  const currentProduct = products.find((item) => item.id == id);

  useEffect(() => setProduct(currentProduct), [currentProduct]);
  //   console.log(currentProduct);
  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct((item) => ({ ...item, [name]: value }));
    // console.log(product);
  };
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(product);
    if (!validate(product)) {
      //   console.log(product);
      return;
    }
    onUpdate(product);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            id=""
            className="form-control"
            onInput={onChange}
            defaultValue={product?.name}
          />
          <span style={{ color: "red" }}>
            {DetailsErros.map((item) =>
              item.name == "name" ? item.message : ""
            )}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">price</label>
          <input
            type="text"
            name="price"
            id=""
            className="form-control"
            onInput={onChange}
            defaultValue={product?.price}
          />
          <span style={{ color: "red" }}>
            {DetailsErros.map((item) =>
              item.name == "price" ? item.message : ""
            )}
          </span>{" "}
        </div>
        <div className="form-group">
          <label htmlFor="">image</label>
          <input
            type="text"
            name="image"
            id=""
            className="form-control"
            onInput={onChange}
            defaultValue={product?.image}
          />
          <span style={{ color: "red" }}>
            {DetailsErros.map((item) =>
              item.name == "image" ? item.message : ""
            )}
          </span>{" "}
        </div>
        <button>add</button>
      </form>
    </div>
  );
};

export default UpdatePro;
