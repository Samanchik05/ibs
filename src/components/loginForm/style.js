import styled from 'styled-components'

export const LoginWrapper = styled.div `
  height: 100vh;
  background-image: url("https://th.bing.com/th?id=OIF.%2f6aP9yLL8ifYoSsP1xCJmw&w=258&h=180&c=7&r=0&o=5&pid=1.7");
  background-repeat:no-repeat;
  background-size:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
.welcome{
  width: 400px;
  height: 150px;
  padding: 20px 15px;
  background:linear-gradient(140deg, #45A5FF,#FAFAFA,blue);
}
.welcome h2{
  display: block;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Poppins';
}
.welcome button{
  padding: 15px;
  color: black;
  font-weight: 600;
  border: none;
  background-color: none;
}
form{
  display: block;
  position: relative;
}
form::after{
  position: absolute;
  content: '';
  display: block;
  top:-5px;
  left:-5px;
  right:-5px;
  bottom: -5px;
  z-index:1;
  background-color: #202124;
  border-radius:15px;
  
}
form .form-inner{
  position: relative;
  display: block;
  padding: 30px;
  z-index: 2;
}
form .form-inner h2{
  margin-left:100px;
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 30px;
}
form .form-inner .form-group{
  display: block;
  width: 300px;
  margin-bottom: 15px;
}
form .form-inner .form-group label{
  display: block;
  color: white;
  font-size: 20px;
  margin-bottom: 6px;
  transition:0.5s;
}
form .form-inner .form-group:focus-within label{
  color: darkviolet;
}
form .form-inner .form-group input{
  display: block;
  width:100%;
  padding:10px 15px;
  border:none;
  border-radius: 5px;
}
form .form-inner .btn{
  display: block;
  width: 100px;
  padding: 10px;
  border:none;
  color: white;
  background-color: #45A5FF;
  border:1px solid white;
  border-radius:10px;
  cursor: pointer;
  margin-left:100px;
}
`;

export const LoginContainer = styled.div `
  width: 82%;
  height: fit-content;
  margin-left:225px;
  background-color: rgba(0,0,0,0.3);
  `;

export const AppLogin = styled.div `
  cursor: pointer;
.btn-log{
  width:120px;
  height: 50px;
  display: flex;
  justify-content:space-between;
  padding:10px;
  border-radius: 10px;
  border:2px ridge #9A3FB0;
  cursor:pointer;
  position: fixed;
  margin-top: -70px;
  margin-left: 20px;
}
.btn-log img{
  width:25px;
  height: 25px;
  cursor: pointer;
  position:fixed;
}
.btn-log button{
  border:none;
  border-radius: 10px;
  padding:10px;
  color: #45A5FF;
  background-color: #fff;
  margin-left: 30px;
  cursor: pointer;
  position:fixed;
  margin-top: -4px;
}
  `;

export const Img = styled.img `
  width: 120px;
  height: 120px;
  border-radius:50%;
  `

export const Div = styled.div `
  width: 100%;
  margin:auto;
  margin-left:90px;
  `

export const Label = styled.label `
  margin-left:105px;
  `
export const Label1 = styled.label `
  margin-left:120px;
  `

export const Error = styled.div `
margin-left:70px;  
color:white;
padding: 10px;
  `