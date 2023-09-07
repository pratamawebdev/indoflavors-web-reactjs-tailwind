import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DetailFoodPage = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();

  console.log(param.userId);

  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="flex flex-col justify-between gap-16 p-16 lg:flex-row lg:items-center">
      <div className="absolute left-5 top-5">
        <Link to="/orders">
          <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" size="xl" />
        </Link>
      </div>
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={menu?.imageUrl}
          alt=""
          className="object-cover w-full h-full aspect-square rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="font-semibold text-violet-600">{menu.type}</span>
          <h1 className="text-3xl font-bold">{menu.name}</h1>
        </div>
        <p className="text-gray-700">{menu.description}</p>
        <h6 className="text-2xl font-semibold">{menu.price}</h6>
      </div>
    </div>
  );
};

export default DetailFoodPage;
