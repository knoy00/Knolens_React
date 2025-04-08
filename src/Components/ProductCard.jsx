import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProductCard.css'; 


function ProductCard({ 
  name, type, description, price, discount, img, img_2, img_3, img_4, img_5, id, 
  attribute_1, attribute_2, attribute_3, code, productOverview, disclaimer, 
  RF200_shot1, RF200_shot2, RF200_shot3, RF200_shot4, RF200_shot5 
})

{
  return (
    <Link 
      to={`/Product/${code}`} 
      state={{
        name, type, img, img_2, img_3, img_4, img_5, description, price, discount, id, 
        attribute_1, attribute_2, attribute_3, code, productOverview, disclaimer, 
        RF200_shot1, RF200_shot2, RF200_shot3, RF200_shot4, RF200_shot5,
      }}
      className="product-card-link"
    >
 
      <div className="productCard">

        {discount && <h2>{discount}% OFF</h2>}

        <div className="Product-img">
          <img src={img} alt={name} id="productImg" /> 
        </div>

        <h3 id="productName">{name}</h3>

        <p id="productDescription">{code}</p>

        <div className="Price-wrapper">
          <p id="productPrice">${price}</p> 
          
          {discount && <span id="productDiscount">${(discount / 100) * price}</span>}
        </div>

    
        <div className="line"></div>
      </div>
    </Link>
  );
}

export default ProductCard;
