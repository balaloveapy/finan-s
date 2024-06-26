import styled from "styled-components";

export const Body = styled.div`
width: 100%;
    .tm{
        display: flex;
        flex-direction: column;
        gap: 50px;
        max-width: 900px;
        @media screen and (max-width:1000px) {
            max-width: 500px;
            width: 100%;
            font-size: 10px;
            label{
                width: 100%;
            }
            div{
                width: 100%;
            }
        }
        @media screen and (max-width:500px) {
            max-width: 300px;
            .mes{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .info{
                .biquine{
                    gap:25px
                }
            }
            }
        }
        margin: 0 auto;
        width: inherit;
        .logo{
        font-weight: bold;
        color: #fff;
        font-size: 24px;
    }
    .info{
        flex: 2;
        background-color: #fff;
    }
    .mes{
        .days{
            display: flex;
            gap: 25px;
            align-items: center;
            justify-content: center;
        }
        background-color: #fff;
        font-weight: bold;
        text-align: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 20px 40px 20px 20px;
        border-radius: 15px;
        display: flex;
        justify-content: space-between;
        span{
            color:#b1b0b2 ;
        }
    }
    .categoria{
        flex: 1;
        display: flex;
        border-radius: 10px;
        background-color: #fff;
        form{
            font-weight: bold;
            gap: 15px;
            padding: 25px 40px 30px 20px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 15px;
            @media screen and (max-width:1000px) {
                width: 100%;
                flex-direction: column;
            }
            display: flex;
            
            justify-content: space-between;
            align-items: center;
            label{
                
                display:inline-grid;
                input{
                    outline: none;
                    border: 1px solid #b1b0b2 ;
                    border-radius: 4px;
                    padding: 2px;
                }
            }
        }
    }
    .info{
            display: flex;
            justify-content: space-between;
            padding: 10px 40px 20px 20px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 15px;
            .biquine{
                display: flex;
                gap: 30px;
            }
            .biquine{
                .text{
                    text-align: center;
                }
                .margin{
                    margin: 10px 0;
                    padding:5px 10px;
                    border-radius: 10px;
                    
                }
            }
            .text{
                text-align: center;
            }
            .margin{
                    margin: 10px 0;
                    padding:5px 10px;
                    border-radius: 10px;
                    text-align: center;
                    
                }
        }
    
  
`