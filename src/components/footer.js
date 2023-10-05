import React from 'react'

function Footer() {
    const currYear = new Date();

  return (
    <footer>
        <p>
            Copyright &copy; {currYear.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer;