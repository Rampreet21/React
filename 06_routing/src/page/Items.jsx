import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./cartContext";

const Items = () => {
  const { addToCart } = useContext(CartContext);


  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="spinnercenter">
        <div className="spinner"></div>
        <h3 className="loader mt-2">Loading...</h3>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      
      {/* Image */}
      <img src={product.thumbnail} alt={product.title} style={styles.image} />

      {/* Details */}
      <div style={styles.details}>
        <h2>{product.title}</h2>

        <p style={styles.brand}>Brand: {product.brand}</p>

        <p style={styles.category}>
          Category: {product.category}
        </p>

        <p style={styles.desc}>{product.description}</p>

        {/* Rating */}
        <div style={styles.ratingBox}>
          ⭐ {product.rating} / 5
        </div>

        {/* Price + Discount */}
        <div style={styles.priceBox}>
          <h3 style={styles.price}>${product.price}</h3>
          <span style={styles.discount}>
            -{product.discountPercentage}% OFF
          </span>
        </div>

        {/* Stock */}
        <p style={styles.stock}>
          {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "15px" }}>
          <button  style={styles.cartBtn} onClick={() => addToCart(product)}>
            Add to Cart 🛒
          </button>
          <button style={styles.buyBtn}>Buy Now ⚡</button>
        </div>



        {/* Extra Info */}
        <h3 style={{marginTop:"30px"}}>Product Highlights</h3>
        <p>SKU: {product.sku}</p>
        <p>Weight: {product.weight}g</p>
        <p>Warranty: {product.warrantyInformation}</p>
        <p>Shipping: {product.shippingInformation}</p>
        <p>Return: {product.returnPolicy}</p>

        {/* Dimensions */}
        <p>
          Size: {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth}
        </p>

        {/* Tags */}
        <div style={styles.tags}>
          {product.tags.map((tag, i) => (
            <span key={i} style={styles.tag}>{tag}</span>
          ))}
        </div>


        {/* Reviews */}
        <div style={styles.reviews}>
          <h3>Customer Reviews</h3>
          {product.reviews.map((rev, i) => (
            <div key={i} style={styles.reviewCard}>
              <strong>{rev.reviewerName}</strong>
              <p>⭐ {rev.rating}</p>
              <p>{rev.comment}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    flexWrap: "wrap"
  },

  image: {
    width: "320px",
    height: "320px",
    objectFit: "contain"
  },

  details: {
    flex: 1
  },

  brand: {
    color: "#555",
    fontWeight: "bold"
  },

  category: {
    color: "#888",
    fontStyle: "italic"
  },

  desc: {
    margin: "10px 0",
    color: "#444"
  },

  ratingBox: {
    margin: "10px 0",
    color: "#f39c12",
    fontWeight: "bold"
  },

  priceBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  price: {
    color: "green",
    fontSize: "24px"
  },

  discount: {
    color: "red",
    fontWeight: "bold"
  },

  stock: {
    margin: "10px 0",
    fontWeight: "bold"
  },

  tags: {
    marginTop: "10px"
  },

  tag: {
    background: "#eee",
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "5px"
  },

  cartBtn: {
    padding: "10px 15px",
    marginRight: "10px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  buyBtn: {
    padding: "10px 15px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  reviews: {
    marginTop: "30px"
  },

  reviewCard: {
    background: "#f9f9f9",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px"
  }
};

export default Items;