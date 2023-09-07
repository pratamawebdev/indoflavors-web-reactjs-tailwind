import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="flex flex-row gap-2">
      <span className="text-red-700 duration-300 hover:text-gray-400">
        <Link to="/">
          Home
        </Link>
      </span>
      <span>/</span>
      <span className="font-semibold">Orders</span>
    </div>
  );
};

export default Breadcrumb;
