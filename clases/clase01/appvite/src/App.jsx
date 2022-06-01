import { useState, useEffect  } from 'react'
//import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import NavBar from './components/NavBar/NavBar';
//import Saludo from './components/Saludo/Saludo';
import ItemContainer from './components/ItemListContainer/ItemContainer';

//Cuerpo()
function App() {
  console.log('Fer')

  const [count, modificarCount] = useState(0) // declaro una cont de el destructori del objeto. useState me inicializa una constante
  const [count2, setCount] = useState(0)
  const [date, setDate] = useState(Date ())
  const [bool, setBool] = useState (true)

  //let count = 0;

  function update(){
    setCount (count + 1);
    setDate (Date());
  }


  

  //console.log(estado[1]) no muestro mas porque hice destructuri
  function agregar(){
       // count= count + 1 //count++ es igual a count +1. React es declarativo, no es imperativo, yo le digo que hacer NUNCA MAS HACER ASI
        console.log(count)
        modificarCount(count+1)
        console.log(count + 1)
  }
 

  const cambiarEstado = () => {
    setBool(!bool)
  }


useEffect(()=>{   
  console.log('addEventListener')
  return ()=>{
    console.log('removeEventListener')
  }
},[])


  useEffect(()=>{   //Me permite ejecutar eventos en segunda plano
    console.log('renderizado de app 1, cada nuevo render')
  })


  useEffect(()=>{   //Me permite ejecutar eventos en segunda plano
    console.log('renderizado de app 2 una sola vez, despues del montado')
  },[])//ejecuta una sola una vez despues dle primer montado y nunca mas cuando se usa array

  useEffect(()=>{   //Me permite ejecutar eventos en segunda plano
    console.log('solo cuando se modifique el bool')
  },[bool])

  console.log('renderizado de app 4')
  return (
      <>
      <NavBar/>
      <ItemContainer/>
      <div>
        <h2>la cantidad es = {count}</h2>
        <button id='botonCount' onClick={agregar}> Click</button>
      </div>

      <div>
        <h1>Hello StackBlitz!</h1>
      <p>{count2}</p>
      <p>{date}</p>
      <button id='botonUpdate' onClick={update}> Pintar contador</button>
      <button id='botonBool' onClick={setBool}> Bool</button>
      </div>


    
      <Cuerpo/>

      </>

  )
  
}
  //App()

export default App
