import { useState } from 'react'

import './App.css'


function Counter() {
  const [contador, setContador] = useState(100)

  function incremento() {
    if (contador < 20) {

      setContador(contador + 1)
    }
  }
  function decremento() {

    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={incremento}>+</button>
      <p>{contador}</p>
      <button onClick={decremento}>-</button>
    </div>
  )
}

function ListaNomes({ nomes }) {

  return (
    <>
      <ul>
        {
        nomes.map((nome, index) =>  <li key={index}>{nome}</li>)
        }
      </ul>
      <input type="text" />
      <button>Adicionar</button>
    </>
  );
}

function Botao(props) {

  return <button >{}</button>
}
function App() {
  const nomes = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Eduardo']
  return (
    <>
      <ListaNomes nomes={nomes} />
    </>
  )
}

export default App
