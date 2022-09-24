import styled from "styled-components";
export const S_SearchInfor = styled.div`
  width: 100%;
  height: 564px;
  background-image: url("http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/11/para-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .searchTitle {
    font-size: 18px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    &:nth-child(2) {
      font-size: 35px;
      font-weight: 600;
      top: 25%;
      left: 50%;
      position: absolute;
    }
    .textSpecical {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 6px;
        background-color: #14b9d5;
        left: 0;
        bottom: 10px;
        z-index: -1;
      }
    }
  }
  .wrapSelect{
    min-height: 250px;
    width: 90%;
    background: #FFF;
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 24px;
    .selectItem{
      
      .nameKind{
        font-size: 14px;
        font-weight: 600;
        display: block;
        margin-bottom: 12px;
      }
      .ant-select-selector{
        height: 100%;
        width: 100%;
        border-radius: 20px;
        background-color: #f9f9f9;
        outline: none;
        border: none;
        .ant-select-selection-item{
          color: #a8a8a8;
         line-height: 38px;
         margin-left: 10px;

       }
      }
    }
    .btnSearch{
      margin-top: 34px;
      outline: none;
      border: none;
      width: 100%;
      color: #fff;
      height: 38px;
        border-radius: 20px;
        background-color: #14b9d5;
    }
  }








  @media screen and (max-width: 992px) {
    min-height: 820px;
    .searchTitle{
      top: 2%;
      &:nth-child(2){
        top: 5%;
      }
    }
    & .wrapSelect{
     top : 54%;
    }
  }
`;
