import "/src/styles/shoppingCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                {/* <RiDeleteBin6Line size={20} /> */}
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </div>
          ))}
		  <div className="mx-auto my-4">
          {products.length > 0 && (
            <button className="items-center justify-center h-10 px-6 py-2 text-white duration-500 bg-red-700 rounded w-27 hover:bg-gray-400">
              Proceed to checkout
            </button>
          )}
		  </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
