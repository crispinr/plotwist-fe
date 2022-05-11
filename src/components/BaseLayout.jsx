import React from "react";
import plot from "../components/images/plot.png";
import { Navbar,Nav, Container,Form, FormControl} from "react-bootstrap";

export default function BaseLayout(){
  const date = new Date();
  const currentYear = date.getFullYear();
  return(
    <>
    <Navbar expand="lg">
    <Container fluid>
    <Navbar.Brand className="ms-4" href="/feed">
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
        <Nav.Link className="me-3" href="/post"><span className="txt">+</span></Nav.Link>
        <Nav.Link className="me-3" href="/feed"><span className="txt">FEED</span></Nav.Link>
        <Nav.Link className="me-3" href="/profile"><span className="txt">PROFILE</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <section className="foot">
        <div className="px-5">
          <div className="" style={{ height: "30px" }}>
          <div className="text-center text-muted d-flex flex-column flex-md-row  justify-content-between align-items-center my-3 mx-md-3  ml-md-4 ml-lg-0">
          <p className="mx-auto txt">
            © {currentYear} License reserved
          </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}