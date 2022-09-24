import React,{useState,useEffect} from "react";
import{S_slide,S_buttonNext,S_buttonPre,S_advertimentSale}from "./S_Slider"
import { FaBeer } from 'react-icons/fa';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';
import { Carousel } from "antd";
const Slider = () => {
   const [isShow, setIsShow] = useState(true)
  
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        
        // cssEase: "linear"
      };
      const carouselRef = React.createRef(); //biến để chuyển slide
      const showAdverti = ()=>{
       setIsShow(true)
     
    }
 
    
    useEffect(()=>{
          if(isShow){
        document.querySelector(S_advertimentSale).classList.add('show');
        setTimeout(()=>{
        const adver__show =  document.querySelector(S_advertimentSale).classList.contains('show');
       
        adver__show && document.querySelector(S_advertimentSale).classList.remove('show');

        },3000)

        setIsShow(false)
          }
      },[isShow])
     
  return (
    <S_slide>
      <Carousel   beforeChange={showAdverti} ref={carouselRef} {...settings} >
        <div className="warpImage"  >
          <img
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/revslider/home-3/parallax-4-1.jpg"
            alt=""
          />
         
        </div>
        <div className="warpImage" >
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
      <S_advertimentSale  >
              <span className="adverti_text">PACKAGES</span>
              <span className="adverti_text">SALES</span>
              <span className="adverti_text">-50%</span>
              <button className="btn_shopNow">Show Now</button>
        </S_advertimentSale>
    </S_slide>
  );
};

export default Slider;
