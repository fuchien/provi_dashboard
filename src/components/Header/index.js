import React from 'react'

const Header = () => {
  return (
    <div style={{
      width: '90vw',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <img style={{
        maxHeight: '50px'
      }} src="https://www.provi.com.br/img/provi_logo_vertical.png" alt="Provi" />
    </div>
  )
}

export default Header
