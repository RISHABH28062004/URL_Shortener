import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className='bg-purple-700 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} ByteLinks - All rights reserved!</p>
      </footer>
    </div>
  )
}

export default Footer
