import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BaseLayout(props){
  
  return(
    <>
    <Header />
    {
      props.children
    }
    <Footer />
    </>
  );
}