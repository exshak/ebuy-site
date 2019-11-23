import React from 'react'

export const Footer = () => (
  <footer id='footer'>
    <hr />
    <div style={{ textAlign: `center` }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href='https://nextjs.org/'>Next</a>
    </div>
  </footer>
)
