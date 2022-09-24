import styled from 'styled-components';
export const S_container = styled.div`
    width: 100%;
    height: 100%;
`
export const S_headerTop  = styled.div`
    width: 100%;
    background-color: red;
    height: 40px;
    background-color: #0071a7;
    #maxHightRow{
        height: 100% ;
    }
    #paddingRow{
        padding: 0 100px;
    }
    .headerTop_left,.headerTop_right{
        height: 100%;
        a{
            display: block;
            color: #fff;
        }
        .logoIteam{
            width: 100%;
           // height: 100%;
            width: 16px;
            height: 16px;
            margin-top: -4px;
        }
    }
`
export const S_navigate = styled.div`
    display: flex;
    align-items: center;
    height: 76px;
    justify-content: space-between;
    .naviLogo{
        width: 162px;
        height: 44px;
        .logo{
            width: 100%;
            height: 100%;
        }
    }
    .naviLink{

        .textNavi{
            font-size: 16px;
            color: #727475;
            a{
            color: #727475; //trường hợp này chỉ có thẻ home va 1 so ko có dropDown

            }
        }
        .bookNow{
            width: 138px;
            height: 32px;
            background-color: #14B9D5;
            border-radius: 30px;
            /* text-align: center; */
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                
                color: #fff;
                display: block;
            }
        }
    }

`