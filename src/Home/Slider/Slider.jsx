import React from "react";
import{S_slide,S_buttonNext,S_buttonPre}from "./S_Slider"
import { FaBeer } from 'react-icons/fa';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';
import { Carousel } from "antd";
const Slider = () => {
   
      const settings = {
        dots: false,
        infinite: true,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        
        // cssEase: "linear"
      };
      
     
     const carouselRef = React.createRef(); //biến để chuyển slide
  return (
    <S_slide>
      <Carousel ref={carouselRef} {...settings}>
        <div className="warpImage" >
          <img 
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/revslider/home-3/parallax-4-1.jpg"
            alt=""
          />
        </div>
        <div className="warpImage">
          <img 
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/revslider/home-3/parallax-9.jpg"
            alt=""
          />
        </div>
        <div className="warpImage">
          <img 
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/revslider/home-3/parallax-4.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <S_buttonPre onClick={()=>{ carouselRef.current.prev()}} ><BsChevronLeft/></S_buttonPre>
      <S_buttonNext  onClick={()=>{ carouselRef.current.next()}}><BsChevronRight/></S_buttonNext>
    </S_slide>
  );
};

export default Slider;
