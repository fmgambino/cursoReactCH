import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import NavBar from './components/NavBar/NavBar';

//Cuerpo()
function App() {
  console.log('Fer')
  return (
      <>
      <NavBar/>
      <Cuerpo/>
      </>

  )
  
}
  //App()

export default App
