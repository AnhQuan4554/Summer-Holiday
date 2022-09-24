import styled from "styled-components";
export const S_slide =  styled.div`
  position: relative;
  .warpImage{
      
    width: 100%;
    height: calc( 100vh - 118px);
    overflow: hidden;
  //  margin-bottom: 100px;/// nhớ chỗ này để làm phần dưới thì cóa đi 
    filter: blur(0px);
        /* &.show{
          filter: blur(0);
        }   */
    img{
        margin-top: -200px;
        width: 100vw;
       
        }

    }
`
export const S_buttonNext = styled.button`
  &:hover{
    opacity: 0.8;
  }
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  font-size: 50px;
  color: #fff;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  
`
export const S_buttonPre = styled.button`
 &:hover{
    opacity: 0.8;
  }
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  font-size: 50px;
  color: #fff;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
 

`
export const S_advertimentSale = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  &.show{
    display: flex;
    animation: moveAdverti 1s ease-in   ;
  }
  @keyframes moveAdverti {
    0%{
      top: 50%;

      left: 0;
      opacity: 0;

    }
    100%{
      top: 50%;
  left: 50%;
  opacity: 1;
    }
  }
  &::after{
    content: '';
    background-color: rgb(99, 35, 35);
    z-index: -1;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

  }
  .adverti_text{
    font-size: 45px;
    margin  :5px 0 ;
    color: #fff;
    opacity: 1;
    letter-spacing: 3px;
    &:first-child{
      margin-top: 86px;
    }
  }
  .btn_shopNow{
    margin-top: 20px;
    width: 230px;
    height: 60px;
    border: 1px solid #fff;
    opacity: 1;
    background-color: transparent;
    border-radius: 40px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;

    &:hover{
      cursor: pointer;
      background-color: #fff;
  
      color: #e39191;
    }

  }
`
