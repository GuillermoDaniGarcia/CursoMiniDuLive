/* eslint-disable no-unused-vars */
import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() =>{
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', {clientX, clientY})
    }

    if (enabled) {
    window.addEventListener('pontermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)',
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App