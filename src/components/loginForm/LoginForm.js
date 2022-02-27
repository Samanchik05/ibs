import React, { useState } from "react";
import { Div, Error, Img, Label, Label1, LoginWrapper } from "./style";
import rasm from "../../assets/image/rasm.jpg"
function LoginForm({ Login, error }) {
  const [details, setdetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      <LoginWrapper>
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <Div>
            <Img src={rasm} alt="" />
            </Div>
            <h2>Login</h2>
            <div className="form-group">
            </div>
            <div className="form-group">
              <Label1 htmlFor="email">Email</Label1>
              <input
                name="email"
                type="email"
                id="email"
                onChange={(e) =>
                  setdetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={(e) =>
                  setdetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
           

            </div>
            <br />
            {error != "" ? <Error className="error">{error}</Error> : ""}
            <button value="LOGIN" className="btn">Submit</button>
          
          </div>
        </form>
      </LoginWrapper>
    </>
  );
}

export default LoginForm;
