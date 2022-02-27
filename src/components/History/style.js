import styled from "styled-components";
















export const HistoryPage = styled.div `
 width:83.3%;
 margin-top: 100px;
 padding:20px;
 margin-left:225px;
 background-color:#FAFAFA;
 height:fit-content;
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
`;
export const LoadingPage = styled.div `
 .loading {
  display: flex;
  justify-content: center;
  margin-left:450px;
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background-color: #45A5FF;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
  }
}
`;

export const Card1 = styled.div `
  width:32.5%;
  height:200px;
  padding:4px;
  border:1px solid black;
  margin-bottom:20px;
  border-radius:6px;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .top{
    display: flex;
    width:32%;
    height:fit-content;
    justify-content: space-between;
    img{
    width:70px;
    height: 70px;
    margin-left:100px;
  }
  }
  table{
    width:100%;
    tr,td{
      border-bottom:1px solid black;
      padding:5px;
      color:black;
      font-weight:500;
      text-align:left;
      border-collapse: collapse;
    }
    th{
      font-weight:500;
      text-align:left;
      border-bottom:1px solid black;
      font-family: 'Poppins',sans-serif;
    }
  }
  .purchase{
    color:black;
    font-weight:bold;
    font-size:18px;
    font-family:'Poppins',sans-serif;
  }
`;










export const Loadingg = styled.div `
 .loadingg {
  display: flex;
  justify-content: center;
  margin-left:450px;
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    /* background-color: #45A5FF; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 50%;
    animation: .5s linear 1s infinite alternate anima;
    &:nth-child(1) {
      animation-delay: 0.1s;
      /* background-color: yellow; */
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
      /* background-color: yellow; */
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
      /* background-color: yellow; */
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
      /* background-color: yellow; */

    }

    &:nth-child(5) {
      animation-delay: 0.5s;
      /* background-color: yellow; */

    }

    &:nth-child(6) {
      animation-delay: 0.6s;
      /* background-color: yellow; */

    }
    &:nth-child(7) {
      animation-delay: 0.7s;
      /* background-color: yellow; */

    }
    &:nth-child(8) {
      animation-delay: 0.8s;
      /* background-color: yellow; */

    }
    &:nth-child(9) {
      animation-delay: 0.9s;
      /* background-color: yellow; */

    }
    &:nth-child(10) {
      animation-delay: 0.10s;
      /* background-color: yellow; */

    }
    &:nth-child(11) {
      animation-delay: 0.11s;
      /* background-color: yellow; */

    }
    &:nth-child(12) {
      animation-delay: 0.12s;
      /* background-color: yellow; */

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