import React from 'react'

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Home 🏠</h1>
      <p style={styles.text}>
        Glad to see you here! Explore and enjoy your day 🚀
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  )
}

const styles = {
  container: {
    height: '92vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer'
  }
}

export default Home
