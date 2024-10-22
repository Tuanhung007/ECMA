import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ListPro from "./pages/ListPro";
import Addpro from "./pages/Addpro";
import { ProSchema } from "./SchemaAll";
import UpdatePro from "./pages/UpdatePro";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [errorList, setErrorList] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct((onInput) => ({
      ...onInput,
      [name]: value,
    }));
    // console.log(product);
  };
  const validateion = (product) => {
    const { error } = ProSchema.validate(product, { abortEarly: false });
    if (error) {
      console.log("loi", error.details);
      setErrorList(error.details);
      return false;
    }
    setErrorList([]);
    return true;
  };
  const onDel = (id) => {
    if (confirm("ban muon xoa")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then(() => setProducts(products.filter((item) => item.id != id)));
    }
  };
  const onAdd = (e) => {
    e.preventDefault();
    if (!validateion(product)) return;
    fetch(`http://localhost:3000/products`, {
      method: "post",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        nav("/");
      })
      .catch((err) => console.log(err));
  };
  const onUpdate = (productUPdate) => {
    fetch(`http://localhost:3000/products/${productUPdate.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productUPdate),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(products.map((item) => (item.id == data.id ? data : item)));
        nav("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ListPro products={products} onDel={onDel} />}
        />
        <Route
          path="/add"
          element={
            <Addpro onChange={onChange} onAdd={onAdd} errorList={errorList} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details products={products} />} />
        <Route
          path="/edit/:id"
          element={
            <UpdatePro
              onUpdate={onUpdate}
              errorList={errorList}
              products={products}
              validate={validateion}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
