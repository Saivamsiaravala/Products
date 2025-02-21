import { useEffect, useState } from "react";
import { type ProductsType } from "../Types";

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
      <div className="carousel-title" style={{ color: "white" }}>
        {" "}
        Select over a range of products
      </div>
      <div className="slider">
        <img
          className="carousel-image"
          src={carouselProducts[currentItem].thumbnail}
          alt={carouselProducts[currentItem].description}
        />
      </div>
    </div>
  );
};

export default Carousel;
