import React from "react";

function CardProps({ img, name, price, discription }) {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ height: "280px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Title:{name}</h5>
          <h4 className="">Price:{price}Rs</h4>
          <p className="card-text">{discription}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProps;
