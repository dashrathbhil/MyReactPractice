import React from "react";
import CardProps from "./CardProps";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
function cardDetails() {
  return (
    <>
      <CardProps
        name="earBuds"
        price="6000"
        img={img1}
        discription=" Enhance your audio experience with wireless earbuds,noise-canceling headphones, or Bluetooth speakers"
      />

      <CardProps
        name="powerbank"
        price="2000"
        img={img2}
        discription=" Enhance your audio experience with wireless earbuds,noise-canceling headphones, or Bluetooth speakers"
      />

      <CardProps
        name="smartbands"
        price="1500"
        img={img3}
        discription=" Enhance your audio experience with wireless earbuds,noise-canceling headphones, or Bluetooth speakers"
      />
    </>
  );
}

export default cardDetails;
