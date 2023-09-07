import Navbar from "../components/Fragments/Navbar";
import { useState, useEffect } from "react";
import "../styles/main.css";
import axios from "axios";
import { useNavigate } from "react-router";
import ShoppingCart from "../components/Fragments/ShoppingCart";
import SearchBarFood from "../components/Fragments/SearchBarFood";
import { faCircleInfo, faPenToSquare, faTrash, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from "../components/Fragments/Breadcrumb";

const OrderPage = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const navigate = useNavigate();
  const getMenus = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}&name=${search}`
      )
      .then((res) => {
        const data = res?.data?.data?.Data;
        setMenus(data);
        console.log(res);
        setCurrentPage(res.data.data.currentPage);
        setNextPage(res.data.data.nextPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = 'Orders Page';
  }, []);

  const handleCreate = () => {
    navigate("/createfood");
  };

  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detailfood/${id}`);
  };

  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/updatefood/${id}`);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        getMenus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, [currentPage, search]);

  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="top-0 left-0 right-0 flex flex-col p-6 text-gray-900 bg-gray-100 font-body h-screen-full">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />

      <Navbar>
        <button
          className="flex my-auto text-red-700 bg-transparent border-none outline-none cursor-pointer mr-7"
          onClick={() => setCartVisible(true)}
        >
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          {productsInCart.length > 0 && (
            <span className="product-count">{productsInCart.length}</span>
          )}
        </button>
      </Navbar>
      <main className="mt-20">
        <div className="flex flex-row items-center justify-between">
          <Breadcrumb />
          <button className="items-center px-6 py-2 text-white duration-500 bg-red-700 rounded hover:bg-gray-400" onClick={handleCreate}>
            Add New Food
          </button>
        </div>
        <div className="flex items-center justify-center my-10">
          <SearchBarFood handleChangeSearch={handleChangeSearch} />
        </div>

        <section
          id="Projects"
          className="grid justify-center grid-cols-1 mx-auto mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14"
        >
          {menus.length > 0 &&
            menus.map((product) => (
              <div
                className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl"
                key={product.id}
              >
                <img
                  src={product.imageUrl}
                  alt="Product"
                  className="object-cover h-60 w-72 rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="mr-3 text-xs text-gray-400 uppercase">
                    {product.type}
                  </span>
                  <p className="block text-lg font-bold text-black capitalize truncate">
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="my-3 text-lg font-semibold text-black cursor-auto">
                      {product.price}
                    </p>

                    <div className="flex flex-row gap-6">
                      <FontAwesomeIcon icon={faCircleInfo} className="cursor-pointer"
                        onClick={() => handleDetail(product.id)} />
                      <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer"
                        onClick={() => handleUpdate(product.id)} />
                      <FontAwesomeIcon icon={faTrash} className="cursor-pointer"
                        onClick={() => handleDelete(product.id)} />
                      <FontAwesomeIcon icon={faBasketShopping} className="cursor-pointer"
                        onClick={() => addProductToCart(product)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </main>
      <div>
        {currentPage > 1 ? (
          <button
            className="fixed items-center px-6 py-2 text-white duration-500 bg-red-700 rounded bottom-3 left-3 hover:bg-gray-400"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev Page
          </button>
        ) : null}

        {nextPage !== 0 ? (
          <button
            className="fixed items-center px-6 py-2 text-white duration-500 bg-red-700 rounded right-3 bottom-3 hover:bg-gray-400"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next Page
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default OrderPage;
