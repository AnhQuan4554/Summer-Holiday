import React from "react";
import { S_container } from "../Header/S_headertop";
import { S_OurPopose, S_inforDetail, ColIner } from "./S_Body";
import { Col, Row } from "antd";
const OurPopose = () => {
  return (
    <S_OurPopose>
      <S_container>
        <span className="titleText">OUR PROPOSALS</span>
        <span className="titleText_2">
          OUR <span className="textSpecoal">DESTINATIONS</span>
        </span>
        <S_inforDetail>
          <Row gutter={[50, 0]}>
            <Col lg={24} xl={12}>
              <div className="wrapContent">
                <div className="contentImage">
                  <img
                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/dest-01-540x712.jpg"
                    alt=""
                  />
                </div>
                {/* đoạn trong này để viết nội dung hover */}
                <ul className="listTour">
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-01-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <span className="item_content-title">Koh Samui</span>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                      <button className="btnContent-location">
                        <span>FROM 700 $</span>
                      </button>
                    </div>
                  </li>
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-02-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <div className="item_content-title">Bora Bora</div>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                      <button className="btnContent-location">
                        <span>FROM 700 $</span>
                      </button>
                    </div>
                  </li>
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-03-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <div className="item_content-title">Bora Bora</div>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                      <button className="btnContent-location">
                        <span>FROM 700 $</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={24} xl={12}>
              <div className="wrapContent">
                <div className="contentImage">
                  <img
                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/dest-01-540x712.jpg"
                    alt=""
                  />
                </div>
                {/* đoạn trong này để viết nội dung hover */}
                <ul className="listTour">
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-01-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <span className="item_content-title">Koh Samui</span>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                      <button className="btnContent-location">
                        <span>FROM 700 $</span>
                      </button>
                    </div>
                  </li>
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-02-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <div className="item_content-title"></div>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                    </div>
                  </li>
                  <li className="tour-item">
                    <div className="tour-item-img">
                      <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/03/package-03-720x720.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tour-item_content">
                      <div className="item_content-title"></div>
                      <div className="item_content-location">
                        <div className="location-icon">
                          <img
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/plugins/nd-travel/addons/visual/packages/layout/icon-pin-grey.png"
                            alt=""
                          />
                        </div>
                        <span className="location-name">Europe</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Col Inner */}
          <ColIner>
            <Row gutter={[10]}>
              <Col xl={6} sm={24}>
                <div className="colInner_tittle">
                  <span className="colInner_tittle_item">Our Proposal</span>
                  <span className="colInner_tittle_item">Creative</span>
                  <span className="colInner_tittle_item">Travel Agency</span>
                </div>
              </Col>
              <Col xl={6} sm={24}>
                <div className="colInner_detail">
                  <span className="colInner_detail_item">1978</span>
                  <p className="colInner_detail_item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ut diam etni
                  </p>
                </div>
              </Col>
              <Col xl={6} sm={24}>
                <div className="colInner_detail">
                  <span className="colInner_detail_item">50 <span className="detail_extra">K</span></span>
                  <p className="colInner_detail_item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ut diam etni
                  </p>
                </div>
              </Col>
              <Col xl={6} sm={24}>
                <div className="colInner_detail">
                  <span className="colInner_detail_item"><span className="detail_extra">+</span>20</span>
                  <p className="colInner_detail_item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ut diam etni
                  </p>
                </div>
              </Col>
            </Row>
          </ColIner>
        </S_inforDetail>
      </S_container>
    </S_OurPopose>
  );
};

export default OurPopose;
