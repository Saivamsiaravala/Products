import { useEffect, useState } from "react";
import { type ProductsType } from "../Types";
import { motion } from "framer-motion";

const Carousel = ({ carouselProducts }: { carouselProducts: ProductsType }) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  // const [currentProduct, setCurrentProduct]= useState<Item >(carouselProducts[0])
  //   console.log(carouselProducts);
  useEffect(() => {
    setTimeout(() => {
      if (currentItem === 3) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 3000);
  }, [currentItem]);

  return (
    <div className="carousel-div">
      <div className="carousel-title">Select over a range of products</div>
      <motion.div className="slider">
        <img
          src={carouselProducts[currentItem].thumbnail}
          alt={carouselProducts[currentItem].description}
        />
      </motion.div>
    </div>
  );
};

export default Carousel;
