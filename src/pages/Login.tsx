import React, { useState } from "react";
import { LoginrSchema, RegisterSchema } from "../SchemaAll";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [registerList, setRegister] = useState({});
  const [errorList, setErrorList] = useState([]);

  const DetailsErros = errorList.map((item) => {
    return { name: item.context.key, message: item.message };
  });
  const validation = (validationUser) => {
    const { error } = LoginrSchema.validate(validationUser, {
      abortEarly: false,
    });
    if (error) {
      // console.log("Validation failed with errors:", error.details); // Log lỗi chi tiết
      setErrorList(error.details); // Lưu lỗi vào state
      return false; // Trả về false nếu không hợp lệ
    }
    setErrorList([]); // Xóa lỗi nếu hợp lệ
    // console.log("Validation passed.");
    return true; // Trả về true nếu hợp lệ
  };
  console.log(DetailsErros);
  const onChange = (e) => {
    const { name, value } = e.target;
    setRegister((onInput) => ({
      ...onInput,
      [name]: value,
    }));
  };
  const nav = useNavigate();
  const Register = (e) => {
    e.preventDefault();
    if (!validation(registerList)) return;
    fetch(`http://localhost:3000/users?email=${registerList.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) {
          alert("tai khoan khogn ton tai");
          return;
        }
        const user = data[0];
        // console.log(user);
        if (user.password != registerList.password) {
          alert("mat khau khong dung");
          return;
        }
        alert("dang nhap jta");

        setRegister({ email: "", password: "", repassword: "" });
        nav("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action="" onSubmit={Register}>
        <div className="form-group">
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            id=""
            className="form-control"
            onInput={onChange}
          />
          <span style={{ color: "red" }}>
            {DetailsErros.map((item) =>
              item.name == "email" ? item.message : ""
            )}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">password</label>
          <input
            type="text"
            name="password"
            id=""
            className="form-control"
            onInput={onChange}
          />
          <span style={{ color: "red" }}>
            {DetailsErros.map((item) =>
              item.name == "password" ? item.message : ""
            )}
          </span>{" "}
        </div>

        <button>dang nhap</button>
      </form>
    </div>
  );
};

export default Login;
