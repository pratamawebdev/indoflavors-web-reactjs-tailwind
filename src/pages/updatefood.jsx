import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UpdateFoodPage = () => {
//   const [menu, setMenu] = useState({});
  const param = useParams();
  const [values, setValues] = useState({
    name: "",
    description: "",
    type: "beverage",
    imageUrl: "",
    price: 0,
  });

  const getMenu = () => {
    // const token = localStorage.getItem("token");

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setValues(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleUpdate = (event) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    event.preventDefault();
    axios
      .put(`https://api.mudoapi.tech/menu/${param?.userId}`, values, config)
      .then((res) => {
        console.log(res);
        alert("Successful")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute left-5 top-5">
        <Link to="/orders">
          <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" size="xl" />
        </Link>
      </div>
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
      >
        <h2 className="mb-4 text-2xl">Food Update</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 text-gray-600">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
            value={values.type}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
          >
            <option value="beverage">Beverage</option>
            <option value="main-dish">Main-Dish</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-2 text-gray-600">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
            value={values.imageUrl}
            onChange={(e) => setValues({ ...values, imageUrl: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-gray-600">
            Harga
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="items-center h-10 px-6 py-2 text-white duration-500 bg-red-700 rounded w-27 hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFoodPage;
