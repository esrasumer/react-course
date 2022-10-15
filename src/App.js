import { useEffect, useState } from 'react';
import './App.css';
import Footerr from './components/Footerr';
import Headerr from './components/Headerr';
import Content from './Content';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';

function App() {

  const [theme,setTheme] = useState("beyaz");

  useEffect(() => {
    document.body.className = theme
  },[theme])

  return (
    <div className="App">
      {/* <Header />
      <Content />
      <Employees />
      <Footer /> */}

      <Headerr theme={theme}/>
      <Footerr theme={theme} setTheme={setTheme}/>

    </div>
  );
}

export default App;
