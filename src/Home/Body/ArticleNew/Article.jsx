import { Col, Row } from "antd";
import React from "react";
import { S_Article, S_BtnArticleNew } from "./S_Article";
const Article = () => {
  return (
    <S_Article>
      <Row gutter={[40,40]}>
        <Col xl={8} xs={24}>
          <div className="ArticleNew">
            <span>OUR PROPOSALS</span>
            <span>Articles {"&"}</span>
            <span>News</span>
            <p className="ArticleNew_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor leo quam, in lacinia lacus congue venenatis.
            </p>
            <S_BtnArticleNew
              colorText="#14b9d5"
              colorBtn="#fff"
              S_width="148px"
              S_height="44px"
            >
                  OUR BLOG
               
            </S_BtnArticleNew>
          </div>
        </Col>
        <Col xl={8} xs={24}>
            <div className="wraparticleIteam" style={{height : `100%`,display:`flex`}}>

          <Row gutter={[0,40]} justify="space-between">
            <Col >
              <div className="articleIteam">
                <span className="articleIteam_time">APRIL 11, 2018</span>
                <span className="articleIteam_tittle">Travel Events</span>
                <p className="articleIteam_content">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <S_BtnArticleNew
                  colorText="#fff"
                  colorBtn="#14b9d5"
                  S_width="130px"
                  S_height="37px"
                >
                  READ MORE
                </S_BtnArticleNew>
              </div>
            </Col>
            <Col >
              <div className="articleIteam">
                <span className="articleIteam_time">APRIL 11, 2018</span>
                <span className="articleIteam_tittle">Travel Events</span>
                <p className="articleIteam_content">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <S_BtnArticleNew
                  colorText="#fff"
                  colorBtn="#14b9d5"
                  S_width="130px"
                  S_height="37px"
                >
                  READ MORE
                </S_BtnArticleNew>
              </div>
            </Col>
           
          </Row>
            </div>
        </Col>
        <Col xl={8} xs={24}>
            <div className="wraparticleIteam" style={{height : `100%`,display:`flex`}}>

          <Row gutter={[0,40]} justify="space-between">
            <Col >
              <div className="articleIteam">
                <span className="articleIteam_time">APRIL 11, 2018</span>
                <span className="articleIteam_tittle">Travel Events</span>
                <p className="articleIteam_content">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <S_BtnArticleNew
                  colorText="#fff"
                  colorBtn="#14b9d5"
                  S_width="130px"
                  S_height="37px"
                >
                  READ MORE
                </S_BtnArticleNew>
              </div>
            </Col>
            <Col >
              <div className="articleIteam">
                <span className="articleIteam_time">APRIL 11, 2018</span>
                <span className="articleIteam_tittle">Travel Events</span>
                <p className="articleIteam_content">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <S_BtnArticleNew
                  colorText="#fff"
                  colorBtn="#14b9d5"
                  S_width="130px"
                  S_height="37px"
                >
                  READ MORE
                </S_BtnArticleNew>
              </div>
            </Col>
           
          </Row>
            </div>
        </Col>
      </Row>
    </S_Article>
  );
};

export default Article;
