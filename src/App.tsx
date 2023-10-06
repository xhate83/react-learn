import { useState } from 'react';
import './App.css'
import { Test } from './components';



function App() {
  // Ciclo de vida (Hooks) se crea -> se ejecuta -> se destruye
  const [a, setA] = useState(0);
  return (
    <>
    <button onClick={() => setA(a + 1)}> 
      Click me
    </button>
    <Test><>{a}</></Test> 
    </>
  )
}

export default App
