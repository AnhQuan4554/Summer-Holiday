import React from "react";
import { Col, Row } from 'antd';
import {S_headerTop,S_container}from './S_headertop'
const Header_top = () => {
  return (
    <S_headerTop  >
            <S_container>
              <Row justify="space-between" align="middle" id="maxHightRow">
                <Col>
                  <div className="headerTop_left">
                    <Row gutter={[15,0]} >
                    <Col>
                        <a href="#" className="headerTop_left_item"><img className="logoIteam" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/world-white.svg" alt="" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">LANGUGE</a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">EN</a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">ES</a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/share-white.svg" alt="" className="logoIteam" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">OUR SOCIAL</a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/facebook-white.svg" alt="" className="logoIteam" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/twitter-white.svg" alt="" className="logoIteam" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/linkedin-white.svg" alt="" className="logoIteam" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/pinterest-white.svg" alt="" className="logoIteam" /></a>
                      </Col>
                    </Row>
                  </div>
                </Col> 
                {/* end headerTop_left  */}
                <Col>
                  <div className="headerTop_right">
                    <Row gutter={[15,0]}>
                    <Col>
                        <a href="#" className="headerTop_left_item"><img className="logoIteam" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/star-white.svg" alt="" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">TOUR PACKAGES</a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item"><img className="logoIteam" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/pin-white.svg" alt="" /></a>
                      </Col>
                      <Col>
                        <a href="#" className="headerTop_left_item">CONTACT US</a>
                      </Col>
                    </Row>
                  </div>
                </Col> 



              </Row>  
      </S_container>
          </S_headerTop>
  );
};

export default Header_top;
