import { useState } from 'react';
import Home from './pages/home/home';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home title='Olá,' description='Seja bem vinde!'/>
    </>
  )
}

export default App
