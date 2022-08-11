import styled from "styled-components";
export const S_slide =  styled.div`
  position: relative;
  .warpImage{
      
    width: 100%;
    height: calc( 100vh - 118px);
    overflow: hidden;
      img{
        margin-top: -200px;
        width: 100vw;
        }
        margin-bottom: 100px;
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
