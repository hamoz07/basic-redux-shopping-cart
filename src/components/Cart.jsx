import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Button, Container, Row } from "react-bootstrap";
import { clear } from "../rtks/slices/cart-slice";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dis = useDispatch();
  const totalPrice = state.reduce((acc,cartitem)=>{
    acc+=(cartitem.price * cartitem.quantity)
    return acc
  },0)
  return (
    <>
      {/* {state.length === 0 ? */}

      {/* :  */}
      {/* ( */}
      <Container>
        <h2>Welcome back</h2>
        {state.length !== 0 ? (
        <>
          <Button variant="danger" className="mb-3" onClick={()=>dis(clear())}>
            clear cart
          </Button>
          <h6>total price: <span className="font-weight-bold">{totalPrice}</span>$</h6>
        </>
        ) : (
          ""
        )}
        <Row>
          <ProductCard state={state} page="cart" />
        </Row>
      </Container>
      {/* ) */}
      {/* } */}
    </>
  );
};

export default Cart;
