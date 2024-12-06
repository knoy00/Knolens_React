import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation between routes
import './ProductCard.css'; // Import the CSS file for styling

// Define the ProductCard component and destructure props
function ProductCard({ 
  name, description, price, discount, img, img_2, img_3, img_4, img_5, id, 
  attribute_1, attribute_2, attribute_3, code, productOverview, disclaimer, 
  RF200_shot1, RF200_shot2, RF200_shot3, RF200_shot4, RF200_shot5 
}) {
  return (
    // Link component navigates to the product details page with a dynamic URL and passes data via state
    <Link 
      to={`/Product/${id}`} // Dynamic URL based on the product's unique ID
      state={{
        name, img, img_2, img_3, img_4, img_5, description, price, discount, id, 
        attribute_1, attribute_2, attribute_3, code, productOverview, disclaimer, 
        RF200_shot1, RF200_shot2, RF200_shot3, RF200_shot4, RF200_shot5, // Pass all product details as state
      }}
      className="product-card-link" // CSS class for styling the entire Link
    >
      {/* Main container for the product card */}
      <div className="productCard">
        
        {/* Display discount percentage if available */}
        {discount && <h2>{discount}% OFF</h2>}

        {/* Container for the product image */}
        <div className="Product-img">
          <img src={img} alt={name} id="productImg" /> {/* Display the main product image */}
        </div>

        {/* Display the product name */}
        <h3 id="productName">{name}</h3>

        {/* Display the product description */}
        <p id="productDescription">{description}</p>

        {/* Container for price details */}
        <div className="Price-wrapper">
          <p id="productPrice">${price}</p> {/* Display the main price */}
          
          {/* Display the discounted price if a discount is available */}
          {discount && <span id="productDiscount">${(discount / 100) * price}</span>}
        </div>

        {/* Divider line for visual separation */}
        <div className="line"></div>
      </div>
    </Link>
  );
}

// Export the ProductCard component to make it available for use in other parts of the app
export default ProductCard;
