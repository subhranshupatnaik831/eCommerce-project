import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";

const Banner = () => {
  return (
    <>
        <img
          src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/16thJuly/Banner_1.gif"
          alt=""
          style={{ width: "100%" }}
        />
      <Carousel
        interval={2000}
        pause={false}
        slide
        touch
      >
        <Carousel.Item interval={3000}>
          <img
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/Galaxy/S26U/S26_Ultra_1242x628._CB785530215_.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/CLP/2026/Jan/28thJan/OnePlus_15R_22._CB772493982_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 h-100"
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/M/17/M17_1242x628._CB772393853_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <img
        src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/TDOW/AprRevamp/Top-deals_1_01.jpg"
        alt=""
        style={{ width: "100%" }}
      />
    </>
  );
};
export default Banner;