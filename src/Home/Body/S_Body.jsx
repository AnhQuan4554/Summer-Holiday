import styled from "styled-components";
export const S_ContainerBody = styled.div`
  padding: 0 150px;
`
export const S_OurPopose = styled.div`
  margin-top: 76px;
  width: 100%;
  .titleText {
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    display: block;
    color: #9a9a9a;
  }
  .titleText_2 {
    margin-top: 10px;
    display: block;
    text-align: center;
    font-size: 36px;
    line-height: 36px;
    font-weight: bold;
    color: #555555;
    .textSpecoal {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #14b9d5;
      }
    }
  }
`;
export const S_inforDetail = styled.div`
  .wrapContent {
    margin-top: 50px;
    width: 100%;
    height: 100%;
    max-height: 386px;
    display: flex;
    justify-content: space-between;
    .contentImage {
      width: 270px;
      height: 356px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .listTour {
      margin-left: 20px;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .tour-item {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .tour-item-img {
          img {
            width: 100px;
          }
        }
        .tour-item_content {
          .item_content-title {
            font-size: 24px;
          }
          .item_content-location {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 54px;
            .location-icon {
              img {
                width: 14px;
              }
            }
            .location-name {
              color: #9d9a9a;
              font-size: 14px;
            }
          }
          .btnContent-location {
            width: 130px;
            height: 28px;
            margin-top: 10px;
            text-align: center;
            border: none;
            outline: none;
            background: linear-gradient(to right, #0ea4c7 0%, #0071a7 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              display: block;
              text-align: center;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
export const ColIner = styled.div`
  .colInner_tittle {
    width: 100%;
    /* background-color: red; */
    .colInner_tittle_item {
      display: block;
      font-size: 34px;
      color: #555555;
      margin-bottom: 6px;
      &:nth-child(1) {
        font-size: 18px;
        color: #9d9a9a;
      }
      &:nth-child(3) {
        margin-bottom: 0;
      }
    }
    @media screen and (max-width: 992px) {
      text-align: center;
    }
  }
  .colInner_detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    .colInner_detail_item {
      color: #555;
      text-align: center;
      &:nth-child(1) {
        font-size: 40px;
      }
      &:nth-child(2) {
        margin-top: 10px;
      }
      .detail_extra {
        font-size: 30px;
        color: #9a9a9a;
      }
    }
    p.colInner_detail_item {
      color: #9a9a9a;
    }
  }
`;
