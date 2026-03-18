import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ data }) => {
  return (
    <div style={styles.card}>
      <Link to={`/products/${data.id}`} style={styles.link}>
        
        <img src={data.thumbnail} alt={data.title} style={styles.image} />
        
        <h4 style={styles.title}>
          {data.title.length > 40 
            ? data.title.slice(0, 40) + "..." 
            : data.title}
        </h4>

        <p style={styles.price}>${data.price}</p>

      </Link>
    </div>
  )
}

const styles = {
  card: {
    width: "250px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    margin: "20px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
    marginBottom: "10px"
  },

  title: {
    fontSize: "16px",
    marginBottom: "8px",
    color: "#333"
  },

  price: {
    color: "green",
    fontWeight: "bold",
    fontSize: "18px"
  },
  link: {
    textDecoration: "none"
  }
}


export default Items