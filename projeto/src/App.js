import React, { useState, useEffect, useMemo, useCallback } from "react";


function App() {
  
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return() => {};

  }, []);
  
  
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback (() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);
  
  
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;



/* 48. Api useState

import React, { useState } from "react";


function App() {
  
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');

  }
  
  
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;

*/

/* 49. Api useState - exemplo

import React, { useState } from "react";


function App() {
  
  //Declarar uma nova variável de state, na qual chamaremos de "contador"  
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>You clicked {contador} times</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default App;

*/

/* 50. useEffect

import React, { useState, useEffect } from "react";


function App() {
  
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return() => {};

  }, []);
  
  
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');

  }
  
  
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;

*/

/* 51. useMemo

import React, { useState, useEffect, useMemo } from "react";


function App() {
  
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return() => {};

  }, []);
  
  
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');

  }

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);
  
  
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;

*/

/* 52. useCallback

import React, { useState, useEffect, useMemo, useCallback } from "react";


function App() {
  
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return() => {};

  }, []);
  
  
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback (() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);
  
  
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;


*/