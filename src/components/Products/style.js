import styled from "styled-components";

export const ProductWrapper = styled.div `
width: 83%;
height: fit-content;
background-color:#FAFAFA;
margin-left:225px;
padding:10px;   
.text-product{
        width:200px;
        padding:5px;
        margin-left:20px;
        .text{
        color:black;
        font-weight: bold;
        font-size: 26px;
        font-family: 'Roboto',sans-serif;
        }
    }
    .df-products{
        width:1000px;
        height:50px;
        margin-top: 60px;
        margin-left:10px;
        display: flex;
        justify-content: space-between;
        .div{
        width:400px;
        height:50px;
        padding:10px;
        display: flex;
        justify-content: space-between;
            .cp1{
            width:110px;
            height: 20px;
            p{
                margin-top:3px;
                font-weight: bold;
                color:#45A5FF;
                cursor:pointer ;
                span{
                    color:#45A5FF;
                font-weight: bold;
                font-family: 'Poppins',sans-serif;
                    border-bottom: 1px solid #45A5FF;
                }
            }
           
        }
     .cp2{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -55px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
                
            }
     }
     .cp3{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -30px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
              
            }
     }
     .cp4{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -20px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
              
            }
     }
        }
        .popup{
            margin-left: 100px;
            .shopping-cart2{
                margin: auto;
                align-items: center;
                cursor:pointer;
                width:100px;
                display: flex;
                justify-content: space-between;
                font-family:'italic';
                height: 43px;
                padding: 10px;
                margin-top:-10px;
                border-radius: 8px;
                background-color: white;
                box-shadow: 0 0 2px black;

                span{
                        padding-bottom: 10px;
                    }
                a{
                  

                }
            
            }
            .shopping-cart{
                width:50px;
                height: 46px;
                margin-top:-45px;
                margin-left:490px;
                padding: 10px;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                a{
                    img{
                    width:30px;
                    cursor:pointer;
                }
            }
    }
            .active-modal{
                overflow-y:hidden;
            }
            .modal, .overlay {
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                position: fixed;
            }

            .overlay {
                background: rgba(49,49,49,0.4);
            }
            .modal-content {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                line-height: 1.4;
                background: white;
                padding: 14px 28px;
                border-radius: 3px;
                margin:32px 10px;
                width: 700px;
                height: 600px;
            }

            .close-modal {
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 5px 8px;
                border:none;
                cursor: pointer;
                img{
                    width:20px;
                    height:20px;
                }
            }
        }
  
    }

    .product{
        margin-left: -20px;
        width:100%;
        padding:10px;
        table{
            width:100%;
            padding:10px;
           tr,th,td{
                border-bottom: 1px solid grey;
                padding:7px;
                color:black;
                font-weight:500;
                text-align:center;
                font-family: 'Poppins',sans-serif;
                border-collapse: collapse;
                img{
                width:30px;
                height: 30px;
            }
            }

            .add{
                /* margin-top: 5px;
                margin-left: 10px; */
                img{
                    width:10px;
                    height: 10px;
                }
            }
        }
    }

    .top{
        width: 100%;
        padding: 10px;
        display:flex;

    .btn-left{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        button{
            padding:10px;
            border:none;
            color:black;
            background-color:white;
            border-radius:10px;
            box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }
    }
    
}
`;




export const Df = styled.div `
width: 200px;
display: flex;
font-size: 10px;
justify-content: space-between;
`


export const TD = styled.td `
    flex-wrap: wrap;
  width: 110px;
p{
    width: 110px;
}
`

export const TDS = styled.td `
cursor:pointer;
`


export const Loading = styled.div `
 .loading {
  display: flex;
  justify-content: center;
  margin-left:100px;
  border-radius: 100%;
  
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background-color: #45A5FF;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 50%;
    animation: .5s linear 1s infinite alternate anima;
    &:nth-child(1) {
      animation-delay: 0.1,5s;
      background-color: pink;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
      background-color: yellow;
    }

    &:nth-child(3) {
      animation-delay: 0.2,5s;
      background-color: red;
    }

    &:nth-child(4) {
      animation-delay: 0.3s;
      background-color: grey;

    }

    &:nth-child(5) {
      animation-delay: 0.3,5s;
      background-color: blue;

    }

    &:nth-child(6) {
      animation-delay: 0.4s;
      background-color: green;

    }
    &:nth-child(7) {
      animation-delay: 0.4,5s;
      background-color: grey;

    }
    &:nth-child(8) {
      animation-delay: 0.5s;
      background-color: blue;

    }
    &:nth-child(9) {
      animation-delay: 0.5,5s;
      background-color: green;

    }
    &:nth-child(10) {
      animation-delay: 0.6,5s;
      background-color: orange;

    }
    &:nth-child(11) {
      animation-delay: 0.7s;
      background-color: yellow;

    }
    &:nth-child(12) {
      animation-delay: 0.7,5s;
      background-color: red;

    }
  }
}

@keyframes anima {
  to {
    opacity: 0.3;
    transform: translate3d(0, -2rem, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
  }
}
`;