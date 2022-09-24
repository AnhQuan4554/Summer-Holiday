import styled from "styled-components";
export const S_Article = styled.div`
  padding: 130px 0;
  .ArticleNew {
    /* min-width: 400px; */
    /* min-height: 650px; */
    background-color: #14b9d5;
    padding: 140px 40px;
    span {
      display: block;
      &:first-child {
        color: #fff;
        letter-spacing: 4px;
        display: block;
      }
      &:nth-child(2) {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
      }
      &:nth-child(3) {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        margin-top: -18px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          height: 1px;
          width: 316px;
          bottom: 0;
          background: #fff;
          left: 0px;
        }
      }
    }
    .ArticleNew_text {
      margin-top: 30px;
      color: #fff;
      line-height: 2.1;
    }
  }
  .articleIteam {
    border: 1px solid #e3d6d6;
    height: 100%;
    padding: 20px;
    span {
      display: block;
    }
    .articleIteam_time {
        letter-spacing: 2px;
    color: #9f9898;
    }
    .articleIteam_tittle{
        font-size: 30px;
    font-weight: 600;
    color: #555555;
    }
    .articleIteam_content{
        line-height: 2;
    color: #8a8787;
    }
  }
`;
export const S_BtnArticleNew = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) => props.colorBtn};
  width: ${(props) => props.S_width};
  height: ${(props) => props.S_height};
  color: ${(props) => props.colorText};
  border-radius: 28px;
`;
