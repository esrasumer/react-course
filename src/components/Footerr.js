import React from 'react'

function Footerr({ theme, setTheme }) {

  const degistir = () => {
    setTheme(theme === 'beyaz' ? 'siyah' : 'beyaz')
  }

  return (
    <div>sayfayi siyah yap <br />

      <button onClick={degistir}>{theme}</button>
    </div>
  )
}

export default Footerr