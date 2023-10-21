import React, { useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { ProductsFetcher } from "../rtks/slices/products-slice";
import { Add } from "../rtks/slices/cart-slice";
import ProductCard from "./ProductCard";
const Products = () => {
    
  const state  =useSelector((state)=>state.products)
  const dis = useDispatch()
  
  useEffect(()=>{
    dis(ProductsFetcher())
},[]) 
    
  return (
    <Container>
      <Row>
      <ProductCard state={state} page={"products"} />
      </Row>
    </Container>
  );
};

export default Products;
