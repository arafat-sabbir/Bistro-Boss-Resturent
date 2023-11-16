import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderNow = () => {
  return (
    <div className="my-20">
      <SectionTitle
        Title={"ORDER ONLINE"}
        subTitle={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>
      <div className="my-20 ">
        <Swiper
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-4xl font-semibold uppercase -mt-16 drop-shadow-xl text-center mr-14 text-white">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-4xl font-semibold uppercase -mt-16 drop-shadow-xl text-center mr-14 text-white">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl font-semibold uppercase -mt-16 drop-shadow-xl text-center mr-14 text-white">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-4xl font-semibold uppercase -mt-16 drop-shadow-xl text-center mr-14 text-white">
              Desert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl font-semibold uppercase -mt-16 drop-shadow-xl text-center mr-14 text-white">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderNow;
