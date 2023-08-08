import React from 'react'
import { useState } from 'react'




export const Home = () => {

  const [puntos, setPuntos] = useState([])

  const addPuntos = (points) => {
    setPuntos([...puntos, points])
  }

  return (
    <div>
        
    <button onClick={() => addPuntos('punto1')}>punto1</button>
    <button onClick={() => addPuntos('punto2')}>punto2</button>
        
    <ul>
        {puntos.map((puntos, index) => (
          <li key={index}>{puntos}</li>
        ))}
    </ul>

    </div>
  )
}
