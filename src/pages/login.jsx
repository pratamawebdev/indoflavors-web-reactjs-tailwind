import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        const data = res.data;
        console.log(res);
        localStorage.setItem("token", data?.data?.token);
        alert("Login Successful")
        setTimeout(() => {
          navigate("/");
        }, 500); 
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
      });
  };

  return (
    <div className="flex h-screen">
      <img
        className="hidden object-cover lg:w-1/2 lg:block"
        src="https://i.pinimg.com/736x/e4/6c/38/e46c38dc99a8d1c542a13615a97670d2.jpg"
      />

      <div className="flex flex-col items-center justify-center w-full border lg:w-1/2">
        <div>
          {!!err.length && <h1 style={{ color: "red" }}>{err}</h1>}

          <form action="" className="mt-10 w-[80%] lg:w-96 mx-auto space-y-4">
            <div className="flex flex-row items-center gap-2 text-xl font-bold lg:text-left ">
              <div>
                <FontAwesomeIcon icon="bowl-food" className="text-red-700" />
              </div>
              <div>
                Indo<span className="text-red-700">Flavors</span>
              </div>
            </div>

            <div className="mt-10 text-3xl font-bold lg:text-left">
              <h2>Hello,</h2>
              <h2>Welcome Back</h2>
            </div>
            <h4>Login to manage your account</h4>
            <input
              type="email"
              className="w-full px-4 py-2 border"
              placeholder="Username"
              onChange={handleChangeUsername}
            />
            <input
              type="password"
              className="w-full px-4 py-2 border"
              placeholder="Password"
              onChange={handleChangePassword}
            />
            <div className="text-blue-600 cursor-pointer hover:text-blue-400">
              Forgot your password ?
            </div>
            <button
              className="w-full py-2 mt-2 text-white bg-green-600 rounded hover:bg-green-400"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:text-blue-400">
              <Link to="/register">Sign Up here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
