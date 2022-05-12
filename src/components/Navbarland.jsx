import React from "react";
import plotwist from "../assets/images/plotwistLogo.png";
import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap";

export default function Navbarland() {
  return (
    <>
      <section className="custom-nav">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="d-flex ms-4" href="/">
              <a>
                <img src={plotwist} style={{ height: "33px" }} />
              </a>
              <span
                className="txt align-self-center"
                style={{ height: "40px" }}
              >
                PLOTWIST
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex m-2 ms-auto">
                <FormControl
                  type="search"
                  placeholder="@ Search"
                  className="me-1 bg-transparent"
                  aria-label="Search"
                />
              </Form>
              <Nav
                className="m-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="me-3" href="/login">
                  <span className="txt">LOGIN</span>
                </Nav.Link>
                <Nav.Link className="me-3" href="/signup">
                  <span className="txt">CREATE ACCOUNT</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}
