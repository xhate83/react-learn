import { useEffect, useState } from 'react';
import './App.css'
import { Test } from './components';



function App() {
  // Ciclo de vida (Hooks) se crea -> se ejecuta -> se destruye
  const [a, setA] = useState(0);

  const fetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return res.json();
  }


  const fetchInformation = async () => {
    const result = await fetcher();
    setA(result);
  }


  useEffect(() => {
    fetchInformation();
  })

  return (
    <>
    <button onClick={fetchInformation}> 
      Click me
    </button>
    <Test><>{a}</></Test> 
    </>
  )
}

export default App
