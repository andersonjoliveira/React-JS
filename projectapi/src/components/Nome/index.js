function Nome({ nome, mudaNome }) {
    return (
      <div>
        <span style={{ color: '#ff0000' }}>Bem-vindo {nome}</span>
        <br/>
        <button onClick={()=> mudaNome('Sujeito Programador') }>Trocar nome</button>
      </div>
    );
  }
  
  export default Nome;
