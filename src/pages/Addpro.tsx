import React from "react";

const Addpro = ({ onChange, onAdd, errorList }) => {
  const DetailsErros = errorList.map((item) => {
    return { name: item.context.key, message: item.message };
  });
  console.log(DetailsErros);
  return (
    <div>
      <form action="" onSubmit={onAdd}>
        <div className="form-group">
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            id=""
            className="form-control"
            onInput={onChange}
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

export default Addpro;
