import React from "react";
import spinnerImg from "../../assets/images/loading.gif";
let Spinner = () => {
  return (
    <>
      <div>
        <img
          src={spinnerImg}
          alt="spinner-img"
          className="d-block m-auto"
          style={{ width: "250px" }}
        />
      </div>
    </>
  );
};

export default Spinner;
