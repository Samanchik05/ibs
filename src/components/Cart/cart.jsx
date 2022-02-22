import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCart,
  decrement,
  increment,
  removeFromCart,
} from "../../redux/modules/cart/Cart.Action";
import { Link } from "react-router-dom";
import {
  Button,
  CartWrapper,
  Clean,
  DivF,
  SUP,
  Table,
  Tr,
  Wrapper,
} from "./style";
import trash from "../../assets/image/trash.svg";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const sellProducts = () => {
    const sellData = cart?.map(({ id, productName, price, chosen }) => ({
      productName: productName,
      price: price,
      amount: chosen,
      productId: id,
    }));
    console.log(sellData);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/sale/sold",
        sellData
      )
      .then((res) => {
        console.log("success", res.data);
        dispatch(cleanCart())
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <Wrapper>
        
        <div className="table">
          <Table>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>  
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
            {cart.map(
              ({ id, productName, price, amount, imageId, chosen }, index) => (
                <>
                  <Tr key={id}>
                    <td>
                      <img
                        src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </td>

                    <td>{productName}</td>

                    <td> {price} $</td>

                    <td>
                      <button
                        className="update"
                        disabled={amount <= chosen}
                        onClick={() => dispatch(increment(index))}
                      >
                        +
                      </button>

                      {chosen}

                      <button
                        className="delete"
                        disabled={chosen <= 1}
                        onClick={() => dispatch(decrement(index))}
                      >
                        -
                      </button>
                    </td>

                    <td>
                      <img
                        className="actiondelete"
                        onClick={() => dispatch(removeFromCart(index))}
                        src={trash}
                        alt=""
                      />
                    </td>
                  </Tr>
                </>
              )
            )}
          </Table>
        </div>
        <div className="price">
          <div className="h1">
            <h1>Price</h1>
          </div>
          <div className="submit">
            <p>Number: {cart.reduce((t, v) => t + v.chosen, 0)}</p>
            <p>Shipping : Free</p>
            <p>Tax: (18%)</p>
            <p>
              Total: {cart.reduce((t, v) => t + v.chosen * v.price - 10, 0)} $
            </p>
          </div>
          <Clean>
            <div className="btn-left">
              <Button onClick={() => dispatch({ type: "CLEAN" })}>Clean</Button>
              <Button onClick={() => sellProducts()}>Sell</Button>
            </div>
          </Clean>
        </div>
      </Wrapper>
    </>
  );
}

export default Cart;
