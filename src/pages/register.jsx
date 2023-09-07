import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(2);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChangeRole = (event) => {
    const selectedRole = parseInt(event.target.value);

    if (selectedRole === 1) {
      alert("Posisi Admin belum dapat dipilih");
      // Atur kembali nilai select ke Employee (2)
      setRole(2);
    } else {
      setRole(selectedRole);
    }
  };

  const handleSubmit = () => {
    axios
      .post("https://api.mudoapi.tech/register", {
        name: name,
        username: username,
        roleId: parseInt(role),
        password: password,
      })
      .then(() => {
        console.log("Register Berhasil");
        alert("Register Successful")
        setTimeout(() => {
          navigate("/login");
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
        className="hidden w-1/2 lg:block"
        src="src/assets/images/Login-Register.jpg"
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
              autoComplete="off"
              type="text"
              className="w-full px-4 py-2 border"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              autoComplete="off"
              type="email"
              className="w-full px-4 py-2 border"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <select
              // id="roleid"
              // name="roleId"
              value={role}
              className="w-full px-4 py-2 border"
              onChange={handleChangeRole}
            >
              <option value={1}>Admin</option>
              <option value={2}>Employee</option>
            </select>
            <input
              autoComplete="off"
              type="password"
              className="w-full px-4 py-2 border"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="text-blue-600 cursor-pointer hover:text-blue-400">
              Forgot your password ?
            </div>
            <button
              className="w-full py-2 mt-2 text-white bg-green-600 rounded hover:bg-green-400"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:text-blue-400">
              <Link to="/login">Sign In here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
