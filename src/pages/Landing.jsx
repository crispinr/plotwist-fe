import React from "react";
import plot from "../components/images/plot.png";
import { Navbar,Nav, Container,Form, FormControl} from "react-bootstrap";

export default function Landing() {
  return (
    <>
    <Navbar expand="lg">
    <Container fluid>
    <Navbar.Brand className="ms-4" href="/">
      <a>
        <img src={plot} style={{height: "33px"}}/>
      </a>
      <span className="txt" style={{height: "40px"}}>PLOTWIST</span>
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
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="me-3" href="/login"><span className="txt">LOGIN</span></Nav.Link>
        <Nav.Link className="me-3" href="/signup"><span className="txt">CREATE ACCOUNT</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  <Container fluid expand="lg">
    <section className="land">
      <div className="d-flex">
        <div className="col">
hiii
        </div>
        <div className="col">
helooo
        </div>
      </div>
    </section>
  </Container>
    </>
  );
}

