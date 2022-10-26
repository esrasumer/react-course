import { useEffect, useState } from 'react';
import './App.css';
import Footerr from './components/Footerr';
import Headerr from './components/Headerr';


function App() {

  const [theme,setTheme] = useState("beyaz");

  useEffect(() => {
    document.body.className = theme
  },[theme])

  return (
    <div className="App">
      <Headerr theme={theme}/>
      <Footerr theme={theme} setTheme={setTheme}/>

    </div>
  );
}

export default App;
