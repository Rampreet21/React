import React from 'react'

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our website! We are passionate about building modern web applications using React.
      </p>
      <p style={styles.text}>
        Our goal is to provide the best user experience and clean design.
      </p>
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
    background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
    color: '#333',
    textAlign: 'center',
    padding: '20px'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    maxWidth: '600px'
  }
}

export default About