import styled from "styled-components";

export const Wrapper = styled.div `
margin-top: 80px;
  width:82%;
  padding:10px;
  margin-left:225px;
  background-color:#fafafafa;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  .table{
    width:63%;
    height:fit-content;
    border-radius:10px; 
    box-shadow:0 0 1px black;
    background-color:white;
    padding:10px;
    margin-left:20px;
    
  }
  .price{
    width:23%;
    height:300px;
    margin-right:10px;
    border-radius:10px;
    display:block;
    margin-left:735px;
    box-shadow:0 0 1px black;
    background-color:white;
    padding:15px;
    z-index:999;
    position:fixed;
    .h1{
      display:flex;
      justify-content:space-between;
      h1{
      font-weight:700;
      font-family:'Poppins',sans-serif;
      color:black;
      margin-left:20px;
    }
    }

    .submit{
      margin-top:30px;
      margin-left:20px;
      line-height:28px;
      p{
        color:black;
        font-weight:600;
        font-family:'PT',sans-serif;
      }
    }
  }
`;

export const Clean = styled.div `
        width: 100%;
        display:flex;
        margin-top:50px;
    .btn-left{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        button{
            padding:10px;
            border:none;
            color:white;
            background-color:red;
            border-radius:10px;
                    }
    }
`;

export const Table = styled.table `
  width: 100%;
  &,th,td{
      border:1px solid white;
      text-align: center;
      color: black;
      padding: 7px;
td{
  
  border-bottom: 1px solid black;
}
   
      img{
        width:40px;
        height:40px;
      }
  }
  .update{
    border: none;
    padding:4px 7px;
    color:black;
    font-size: 18px;
    background-color:#EFEFEF;
  }
  .delete{
    border: none;
    padding:2.5px 8px;
    color:black;
    font-size: 20px;
    background-color:#EFEFEF;
  }
  .actiondelete{
    border-radius: 10px;
    border: 1px solid red;
    color: black;
    padding: 10px;
    background-color:none;
  } 
.border{
/* border: 1px solid black; */
  
}
`;
export const Button = styled.button `
  padding: 10px;
  color: white;
  font-size: 16px;
  cursor:pointer;
`;

export const DivF = styled.div `
border: 1px solid black;
margin: 5px 0;

`

export const Tr = styled.tr `
/* border: 1px solid black; */
margin: 10px 0;

`


export const SUP = styled.p `
padding-top:7px;
`

export const TD = styled.tbody `
width: 100px;
`