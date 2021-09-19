import { useState } from 'react';
import './style.css';
import firebase from './firebaseConnection';

function App() {
  /*
  const [idPost, setIdPost] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  */

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');

  const [user, setUser] = useState({});
  
  /*
  const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  */
  

  /*
  useEffect(()=>{
    async function loadPosts(){
      await firebase.firestore().collection('posts')
      .onSnapshot((doc)=>{
        let meusPosts = [];

        doc.forEach((item)=>{
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor
          })
        });

        setPosts(meusPosts);

      })
    }

    loadPosts();

  }, []);
  */

  
  /*
  useEffect(()=>{

    async function checkLogin(){
      await firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          setUser(true);
          setUserLogged({
            uid: user.uid,
            email: user.email
          });
          //se tem usuario logado entra aqui dentro...

        }else{
          setUser(false);
          setUserLogged({});
          //nao possui nenhum user logado...
        }
      })
    }

    checkLogin();

  }, []);
  */

  /*
  async function handleAdd(){

    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor
    })

    .then(()=>{
      console.log('DADOS CADASTRADOS COM SUCESSO!');
      setTitulo('');
      setAutor('');
    })

    .catch((error)=>{
      console.log('GEROU ALGUM ERRO: ' + error);
    })
    
    await firebase.firestore().collection('posts')
    .doc('12345')
    .set({
      titulo: titulo,
      autor: autor
    })

    .then(()=>{
      console.log('DADOS CADASTRADOS COM SUCESSO!');
    })

    .catch((error)=>{
      console.log('GEROU ALGUM ERRO: ' + error);
    })

  }
  */

  /*
  async function buscaPost(){
    
    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot)=>{
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista);

    })
    .catch(()=>{
      console.log('DEU ALGUM ERRO!');
    })
    
    await firebase.firestore().collection('posts')
    .doc('aikIqvywoP513PpIO6bs')
    .get()
    .then((snapshot)=>{

      setTitulo(snapshot.data().titulo);
      setAutor(snapshot.data().autor);

    })
    .catch(()=>{
      console.log('DEU ALGUM ERRO')
    })
  }
  */

  /*
  async function editarPost(){
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      console.log('DADOS ATUALIZADOS COM SUCESSO!');
      setIdPost('');
      setTitulo('');
      setAutor('');
    })
    .catch(()=>{
      console.log('ERRO AO ATUALIZAR');
    });
  }*/

  /*async function excluirPost(id){
    await firebase.firestore().collection('posts').doc(id)
    .delete()
    .then(()=>{
      alert('ESSE POST FOI EXCLUIDO!');
    })
    
  }
  */

  /*
  async function fazerLogin(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((value)=>{
      console.log(value.user);
    })
    .catch((error)=>{
      console.log('ERRO AO FAZER O LOGIN' + error);
    })
  }
  */

  async function novoUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value)=>{
      //console.log(value);

      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .set({
        nome: nome,
        cargo: cargo,
        status: true
      })
      .then(()=>{
        setNome('');
        setCargo('');
        setEmail('');
        setSenha('');
      })


    })
    .catch((error)=>{
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca...');
      }else if(error.code === 'auth/email-already-in-use'){
        alert('Esse email já existe!');
      }
    })
  }

  async function logout(){
    await firebase.auth().signOut();
    setUser({});
  }

  async function login(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then( async (value)=>{
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .get()
      .then((snapshot)=>{
        setUser({
          nome: snapshot.data().nome,
          cargo: snapshot.data().cargo,
          status: snapshot.data().status,
          email: value.user.email
        });

      })

    })

    .catch((error)=>{
      console.log('ERRO AO LOGAR' + error);
    })

  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1><br/>

      

      <div className="container">
        <label>Nome</label>
        <input type="text" value={nome} onChange={ (e) => setNome(e.target.value) } /><br/>

        <label>Cargo</label>
        <input type="text" value={cargo} onChange={ (e) => setCargo(e.target.value) } /><br/>
        
        <label>Email</label>
        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } /><br/>

        <label>Senha</label>
        <input type="password" value={senha} onChange={ (e) => setSenha(e.target.value) } /><br/>

        
        <button onClick={ login }>Fazer Login</button>
        <button onClick={ novoUsuario }>Cadastrar</button>
        <button onClick={ logout }>Sair da conta!</button>
      </div>

      <hr/> <br/>

      { Object.keys(user).length > 0 && (
        <div>
          <strong>Olá </strong> {user.nome} <br/>
          <strong>Cargo: </strong> {user.cargo} <br/>
          <strong>Email: </strong> {user.email} <br/>
          <strong>Status: </strong> {user.status ? 'ATIVO' : 'DESATIVADO'} <br/>

        </div>
      )}
      

    </div>
  );
}

export default App;

/*

      {user && (
        <div>
          <strong>Seja bem vindo! (Você está logado!)</strong><br/>
          <span>{userLogged.uid} - {userLogged.email}</span>
          <br/><br/>
        </div>
      )}

      <button onClick={ fazerLogin }>Fazer login</button>

      <div className="container">

        <h2>Banco de Dados:</h2>

        <label>ID: </label>
        <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value) } />

        <label>Titulo:</label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value) } />

        <label>Autor: </label>
        <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value) }/>

        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Buscar Post</button>
        <button onClick={ editarPost }>Editar</button>
        
        
        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <span>ID - {post.id}</span><br/>
                <span>Titulo: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <button onClick={()=> excluirPost(post.id) }>Excluir post</button><br/><br/>
              </li> 
            )
          })}
        </ul>
        

      </div>

*/
