import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

  return (
    <div className='footer'>
        <p>Ochronka Jurek w Poznaniu {year} </p>
        <p>Projekt i wdrożenie strony Anna Szczołko</p>
    </div>
  )
}
