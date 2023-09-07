import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateFoodPage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("beverage");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState();
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://api.mudoapi.tech/menu",
        {
          name: name,
          description: description,
          type: type,
          imageUrl: imageUrl,
          price: parseInt(price),
        },
        config
      )
      .then(() => {
        console.log("Berhasil");
        alert("Successful")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="absolute left-5 top-5">
        <Link to="/orders">
          <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" size="xl" />
        </Link>
      </div>
    <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl">Add New Update</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
          onChange={(event) => setName(event.target.value)}
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
          onChange={(event) => setDescription(event.target.value)}
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
          onChange={(event) => setType(event.target.value)}
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
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
          onChange={(event) => setImageUrl(event.target.value)}
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
          onChange={(event) => setPrice(parseInt(event.target.value))}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="items-center h-10 px-6 py-2 text-white duration-500 bg-red-700 rounded w-27 hover:bg-gray-400"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  </div>
  );
};

export default CreateFoodPage;
