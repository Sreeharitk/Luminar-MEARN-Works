import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <Navbar className="bg-primary">
            <Container className=" align-items-center">
            <Navbar.Brand href="#home">
                <Link to={"/"} style={{textDecoration:"none"}}>
                  <img
                  alt=""
                  src="https://i.postimg.cc/VsTLffWH/cart-icon2.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  />{' '}
                </Link>
                <b className="fs-2 text-light ms-2">React Bootstrap</b>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header