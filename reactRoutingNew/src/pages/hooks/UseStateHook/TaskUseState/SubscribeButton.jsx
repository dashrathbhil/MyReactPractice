import React, { useState } from "react";

function SubscribeButton() {
  const [isSubscribed, setIsSubscribed] = useState("");

  const handleClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <>
      <div className="container ">
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className="text-decoration-underline">
              2.subscribe
            </h4>
          </div>
          <div className="col">
            <button
              className="btn btn-primary sub-button"
              onClick={handleClick}
            >
              {isSubscribed
                ? "Congralutaions, You are Subscribed"
                : "please Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeButton;
