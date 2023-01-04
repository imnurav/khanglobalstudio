import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/coursesImage.jpg";
const Product = () => {
  return (
    <div className="product grid grid-two-column product">
      <div>
        <img className="productImage" src={IMG1} alt="khan" srcset="" />
      </div>
      <div className="p-3 productRight" 
      // style={{border:'2px solid red'}}
      >
        <div  >
          <Link to="/upsc-hindi-hinglish-medium">
            <h1>Rs. 7500</h1>
          </Link>
          <Link to="/upsc-hindi-hinglish-medium">
            <h2>UPSC(I.A.S) Hindi & Hinglish medium</h2>
          </Link>
          <div className="d-flex justify-content-between">
            <div>10 Months Duration</div>
            <div>18 Months Validity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
