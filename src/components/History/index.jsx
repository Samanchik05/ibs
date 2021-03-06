import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/history/HistoryAction";
import { Loading } from "../Products/style";
import { Card1, HistoryPage, Loadingg, LoadingPage, Text } from "./style";

function History() {
  const dispatch = useDispatch();
  const productL = useSelector((state) => state.productList);
  const { loading, success, error, data } = productL;

  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);
  return (
    <HistoryPage>
      {loading && (
        <Loadingg>
          <div className="loadingg">
            <div>S</div>
            <div>A</div>
            <div>B</div>
            <div>R</div>
            <div></div>
            <div>Q</div>
            <div>I</div>
            <div>L</div>
            <div>I</div>
            <div>N</div>
            <div>G</div>
          </div>
        </Loadingg>
      )}
      {success && "Success"}
      {error && "Error"}



      {productL?.data?.map(({ id, createdAt, productList }, index) => (
        <Card1 key={id}>
          <div className="top">
            <p>{index + 1}</p>
          </div>
          <table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>

            {productList.map(
              ({ amount, product: { id, productName, price } }, index) => (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td> {productName}</td>
                    <td>{amount}</td>
                    <td>$ {price}</td>
                    <td>$ {amount * price}</td>
                  </tr>
                </>
              )
            )}
          </table>
        </Card1>
      ))}
    </HistoryPage>
  );
}

export default History;
