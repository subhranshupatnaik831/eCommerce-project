import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";

const Banner = () => {
  return (
    <>
      <Carousel
        interval={2000}
        pause={false}
        slide
        touch
      >
        <Carousel.Item interval={5000}>
          <img
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/16thJuly/Banner_1.gif"
            alt=""
            style={{ width: "100%" }}
          />
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/TDOW/AprRevamp/Top-deals_1_01.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/AmazonStores/Revamp/Amazon-Stores_01._CB804355852_.jpg"
            alt="Second slide"
            style={{ height: "100vh" }}
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
    </>
  );
};
export default Banner;