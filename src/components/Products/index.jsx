import React, { useEffect, useState } from "react";
import CartIcon from "../../assets/image/shopp.svg";
import Pluss from "../../assets/image/plus.svg";
import Plus from "../../assets/image/plus.png";
import cartsel from "../../assets/image/cart-sel.svg";
import { ProductWrapper, LoadingPage, TD, TDS, Loading } from "./style";
import { getProductAction } from "../../redux/modules/GetProduct/getProdcuct.Action";
import { useDispatch, useSelector } from "react-redux";
import Add from "../popup";
import { addToCart } from "../../redux/modules/cart/Cart.Action";

function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.getProduct);
  const { loading, success, error, data } = product;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  return (
    <>
      <ProductWrapper>
        <div className="text-product">
          <h3 className="text">Products</h3>
        </div>
        <div className="df-products">
          <div className="div">
            <div className="cp1">
              <p>
                <span>All Product</span>
              </p>
            </div>
            <div className="cp2">
              <p>Completed</p>
            </div>
            <div className="cp3">
              <p>Panding</p>
            </div>
            <div className="cp4">
              <p>Cancel</p>
            </div>
          </div>
          <div className="popup">
            <div className="shopping-cart2" onClick={toggleModal}>
              <p>Cart</p>
              <a>
                <img src={cartsel} />
              </a>
            </div>
            {modal && (
              <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                  <Add />
                  <button className="close-modal" onClick={toggleModal}>
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/512/1828/1828747.png"
                      }
                      alt="hh"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="product">
          <table>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Data</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>

            {product.data
              .filter((v, i) => !cart.some((value) => value.id === v.id))
              .map(
                (
                  { id, productName, price, imageId, description, category },
                  index
                ) => (
                  <tr key={id}>
                    <TD>{index + 1}</TD>
                    <TD> # {id}</TD>
                    <TD>
                      <img
                        src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </TD>
                    <TD>
                      <p>{productName}</p>
                    </TD>
                    <TD>{description}</TD>
                    <TD> {category}</TD>
                    <TD> {price}0 $</TD>
                    <TDS>
                      <img
                        src={CartIcon}
                        className="add"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              imageId,
                              productName,
                              chosen: 1,
                              price,
                            })
                          )
                        }
                      />
                    </TDS>
                  </tr>
                )
              )}
          </table>
          {loading && (
            <Loading>
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Loading>
          )}
          {success && "Success"}
          {error && "Error"}
        </div>
      </ProductWrapper>
    </>
  );
}

export default ProductPage;
