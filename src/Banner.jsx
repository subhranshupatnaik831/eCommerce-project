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
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/Galaxy/UnPacked/512/1242x300_1.gif"
            alt="First slide"
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
    </>
  );
};
export default Banner;