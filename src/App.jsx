import { useState } from 'react'
import ListaNomes from './ListaNomes'
import Logo from './componentes/Logo'
import './App.css'
import Shelf from './componentes/Shelf'

const produtos = [ 
  {id: 1, nome: 'Camiseta', preco: 25.00, image: 'https://via.placeholder.com/150'},
  {id: 2, nome: 'Calça', preco: 50.00, image: 'https://via.placeholder.com/150'},
  {id: 3, nome: 'Vestido', preco: 75.00, image: 'https://via.placeholder.com/150'},
  {id: 4, nome: 'Shorts', preco: 30.00, image: 'https://via.placeholder.com/150'},
  {id: 5, nome: 'Tênis', preco: 120.00, image: 'https://via.placeholder.com/150'},
]
function Botao(props) {

  return <button >{}</button>
}
function App() {
 
  return (
    <>
     <Logo />
      <Shelf products={produtos} />
    </>
  )
}

export default App
