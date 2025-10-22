import { useState } from 'react'
import ThemeChange from './components/themechange'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState('white')
  
  const updBgColor = (color) => {
    setbgColor(color);
    changeTheme();
  }
  const changeTheme = () => {
        document.body.style.backgroundColor = `${bgColor}`
    };
  
  return (
    <>
    <div id='bg'>
      <ThemeChange color='firebrick' onclick = {() => updBgColor('firebrick')}/>
      <ThemeChange color='darkolivegreen' onclick = {() => updBgColor('darkolivegreen')}/>
      <ThemeChange color='cadetblue' onclick = {() => updBgColor('cadetblue')}/>
      <ThemeChange color='darkgray' onclick = {() => updBgColor('darkgray')}/>
      <ThemeChange color='white' onclick = {() => updBgColor('white')}/>
    </div>
    <span>made with <b>React™</b></span>
    </>
  )
}

export default App;
