import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function View() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  function getProduct() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div>
      {product ? (
        <div>
          <Row>
            <Col className="p-5" lg={6}><img style={{height:"570px"}} src={product.image} alt="" className="p-5 w-75"/></Col>
            <Col className="p-5" lg={6}>
              <h1 className="text-info mb-3">{product.title}</h1>
              <h1 className="text-info mb-3">{product.category}</h1>
              <p className="fs-5">{product.description}</p>
              <b className="fs-5">Rating: {product?.rating?.rate}</b>
              <h2 className="mt-4">{product?.price} Rs</h2>
            </Col>
          </Row>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default View;
