import React from 'react'

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>Feel free to reach out to us 👇</p>

      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button style={styles.button}>Send Message</button>
      </form>
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
    background: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
    textAlign: 'center',
    padding: '20px'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px'
  },
  text: {
    marginBottom: '20px',
    fontSize: '1.2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none'
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    height: '100px'
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer'
  }
}

export default Contact