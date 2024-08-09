import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/slider-3.jpg'
import slider4 from '../assets/slider-4.jpg'
import slider5 from '../assets/slider-5.jpg'
import slider6 from '../assets/slider-6.jpg'
import slider7 from '../assets/slider-7.png'

export default function Login() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return ( 
    <div className="font-bold text-center bg-teal-300 ">
      <div>
        <h1 className=" uppercase">Ofertas del mes</h1>
      </div>
      <Slider {...settings}>
        <div className="p-5 outline-none">
          <img src={slider1} alt="" />
        </div>
        <div className="p-5 outline-none">
        <img src={slider2} alt="" />
        </div>
        <div className="p-5 outline-none">
        <img src={slider3} alt="" />

        </div>
        <div className="p-5 outline-none">
        <img src={slider4}alt="" />
        </div>
        <div className="p-5 outline-none">
        <img src={slider5} alt="" />
        </div>
        <div className="p-5 outline-none">
        <img src={slider6} alt="" />
        </div>
        <div className="p-5 outline-none">
        <img src={slider7} alt="" />
        </div>
        
      </Slider>
    </div>
  );
}
