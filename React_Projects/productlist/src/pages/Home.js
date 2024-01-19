import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

function Home() {
  //create a state to store output of api
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((out) => out.json())
      .then((data) => setProducts(data));
    //store data in state
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Container>
        <Row style={{marginLeft:"-15px", marginRight:"-15px"}}>
          <Col lg={6}>
            <img
              src="https://i.postimg.cc/R0H8JpXc/shopping-fun-removebg-preview.png"
              alt=""
            />
          </Col>
          <Col lg={6}>
            <div className="text-center">
              <h1>Check out your favorite wears</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                velit ab ratione dignissimos delectus rem nesciunt. Quasi voluptas
                recusandae voluptate ipsum cupiditate aliquid et alias, magnam
                unde voluptatem, quibusdam nam?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {products?.length > 0 ? (
            products.map((i) => (
              <Col>
                <Link to={`/single-view/${i?.id}`} style={{textDecoration:"none"}}>
                  <Card style={{ width: "18rem" }} className="m-3 p-3 bg-danger">
                    <Card.Img
                      variant="top"
                      src={i.image}
                      style={{ height: "300px" }}
                    />
                    <Card.Body>
                      <Card.Title>{i.title.length>20?i.title.slice(0,20)+" ...":i.title}</Card.Title>
                      <Card.Text>
                        <h2>{i.price} Rs</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
