import { useEffect, useState } from 'react'
import './App.css'

function FollowMouse() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y:0})

  //pointer move
  useEffect(() => {
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const{clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => { // cleanup method
      // cleanup: -> when the component is unmounted, when dependencies change before executing the effect again
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }  , [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] > se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined > se ejecuta cada vez que se renderiza el componente
  
  
  //change body class name
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  })


  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
        Seguir puntero
      </button>
    </main>
  )
}

function App () {
  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
