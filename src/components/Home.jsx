import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import productList from "../products";

const Home = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    // console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          imgSrc={i.imgSrc}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add To Cart
    </button>
  </div>
);
export default Home;
