// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Portfolio {
  id: number;
  title: string;
  des: string;
  skill: string;
  webUrl: string;
  gitUrl: string;
}
const PortfolioList: Portfolio[] = [
  {
    id: 0,
    title: "제목1",
    des: "사이트 리뉴얼함",
    skill: "React+Typescript",
    webUrl: "http://naver.com",
    gitUrl: "",
  },
  {
    id: 0,
    title: "제목1",
    des: "사이트 리뉴얼함",
    skill: "React+Typescript",
    webUrl: "http://naver.com",
    gitUrl: "",
  },
  {
    id: 0,
    title: "제목1",
    des: "사이트 리뉴얼함",
    skill: "React+Typescript",
    webUrl: "http://naver.com",
    gitUrl: "",
  },
];
const PortfolioSwiper = () => {
  return (
    <div className="main portSwiper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        // spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {PortfolioList.map((item) => (
          <SwiperSlide>
            <p>
              <img src={`./images/portfolio-swiper.png`} alt={item.title} />
            </p>
            <div className="text-box">
              {/* <h3>{item.tile}</h3> */}
              <p>{item.des}</p>
              <div className="btn-wrap">
                <span>{item.skill}</span>
                <ul>
                  <li>
                    <a href={item.gitUrl}>git</a>
                  </li>
                  <li>
                    <a href={item.webUrl}>web</a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSwiper;
