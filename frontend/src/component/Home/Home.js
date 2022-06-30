import React, { useEffect } from "react";
import MetaData from "../layout/MetaData";
import { BsMouse } from "react-icons/bs";
import "./Home.css";
import Product from "./ProductCard.js";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Home Working" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find amazing products below</h1>
            <a href="#container">
              <button>
                Scroll <BsMouse />
              </button>
            </a>
          </div>
          <h2 className="homeheading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <Product key={product._id} product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
