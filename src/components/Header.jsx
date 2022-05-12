import React from "react";
import plotwist from "../assets/images/plotwistLogo.png";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <section className="custom-nav">
        <Navbar expand="lg">
          <Navbar.Brand className="ms-4" href="/feed">
            <img src={plotwist} style={{ height: "33px" }} alt="logo" />
            <span className="txt" style={{ height: "40px" }}>
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
              <Nav.Link className="me-3" href="/post">
                <span className="txt">+</span>
              </Nav.Link>
              <Nav.Link className="me-3" href="/feed">
                <span className="txt">FEED</span>
              </Nav.Link>
              <Nav.Link className="me-3" href="/profile">
                <span className="txt">PROFILE</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
}
