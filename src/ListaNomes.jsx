import {useState} from 'react';

function ListaNomes({ names }) {
    const [input, setInput] = useState('')
    const [nomes, setNomes] = useState(names)

    const handleNewName = () => {
        setNomes([...nomes, input])    
    }
    return (
      <>
        <ul>
          {
          nomes.map((nome, index) =>  <li key={index}>{nome}</li>)
          }
        </ul>
        <input type="text" onChange={(event)=> setInput(event.target.value)} />
        
        <button onClick={handleNewName }>Adicionar</button>
    
      </>
    );
  }

  export default ListaNomes;
  