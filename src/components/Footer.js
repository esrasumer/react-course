import React from 'react'

function Footer({ theme, setTheme }) {

  const degistir = () => {
    setTheme(theme === 'beyaz' ? 'siyah' : 'beyaz')
  }

  return (
    <div>sayfayi siyah yap <br />

      <button onClick={degistir}>{theme}</button>
    </div>
  )
}

export default Footer