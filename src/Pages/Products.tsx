import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type ProductsType, Item } from "../Types";
import Carousel from "../Components/Carousel";
import Loading from "../Components/Loading";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItem } from "./Cart/CartSlice";
import { addWishListItem } from "./Wishlist/WishlistSlice";
import { toast } from "react-toastify";

const url = import.meta.env.VITE_API;

const Products = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<ProductsType | null>(null);
  const [carouselProducts, setCarouselProducts] = useState<ProductsType | null>(
    null
  );
  const isLoggedIn: boolean = useAppSelector((store) => store.login.isLoggedIn);

  const wishlistHandler = (id: number) => {
    console.log(id);
    isLoggedIn
      ? products &&
        dispatch(addWishListItem(products[id - 1])) &&
        toast.success("Product added to wishlist", { autoClose: 2000 })
      : toast.error("Please Login", { autoClose: 2000 });
  };
  const cartHandler = (id: number) => {
    console.log(id);
    isLoggedIn
      ? products &&
        dispatch(addItem(products[id - 1])) &&
        toast.success("Product added to cart", { autoClose: 2000 })
      : toast.error("Please Login", { autoClose: 2000 });
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(url);
      // console.log(data.products);
      setProducts(data.products);
      setCarouselProducts([
        data.products[0],
        data.products[9],
        data.products[10],
        data.products[15],
      ]);
    }
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="home">
        <div className="carousel">
          {carouselProducts ? (
            <Carousel carouselProducts={carouselProducts} />
          ) : (
            <Loading />
          )}
        </div>
        <div className="products">
          <div className="products-title">Products</div>
          <div className="product-items">
            {products &&
              products.map((item: Item, index: number) => {
                return (
                  <li key={index} className="product-item">
                    {/* {item.id} */}
                    <div className="product-image-div">
                      <img src={item.thumbnail} className="product-image" />
                    </div>
                    <div
                      className="product-title"
                      title="Click for product details"
                    >
                      {item.title}
                    </div>
                    <div className="price-wish-cart">
                      <button className="price-div">
                        <div className="price" title="Price">
                          ${item.price}
                        </div>
                      </button>
                      <button
                        className="wishlist-div"
                        title="wishlist"
                        onClick={() => wishlistHandler(item.id)}
                      >
                        <FaRegHeart className="wishlist-icon" />
                      </button>
                      <button
                        className="cart-div"
                        title="Add to Cart"
                        onClick={() => cartHandler(item.id)}
                      >
                        <FaCartArrowDown className="cart-icon" />
                      </button>
                      {/* <div className="wishlist" title="Add to wishlist">
                        <FaRegHeart className="wishlist-icon" />
                      </div> */}
                    </div>
                  </li>
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
