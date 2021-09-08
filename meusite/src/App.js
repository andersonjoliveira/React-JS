/* 45. Projeto Biscoito da Sorte */

import React, { Component } from "react";
import './estilo.css'

// Importando a imagem do cronometro
import imagemBiscoito from './assets/biscoito.png'; 

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };


        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.',
                       'O bom-senso vale mais do que muito',
                       'O riso é a menor distância entre duas pessoas.',
                       'Deixe de lado as preocupações e seja feliz.',
                       'Realize o óbvio, pense no improvável e conquiste o impossível,', 
                       'Acredite em milagres, mas não dependa deles.',
                       'A maior barreira para o sucesso é o medo do fracasso.'];
    }
    
    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);

    }


    render(){
        return(
            <div className="container">
                <img src={imagemBiscoito} className="img" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>

        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;


/*
32. Entendendo props e component

import React from 'react';

const Bemvindo = (props) =>{
    return(
        <div>
            <h2>Bem-vindo(a) {props.nome} </h2>
            <h3>Tenho {props.idade} Anos</h3>
        </div>
    );
}

function App(){
    return(
        <div>
            Olá Mundo!
            <Bemvindo nome="Lucas" idade="24" />
            <Bemvindo nome="Amanda" idade="19" />
            <h1>Curso React</h1>
        </div>
    ); 

}

export default App;
*/

/*
33. Entendendo props e component

import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo}
                   idade={props.idade} />
            <Social fb={props.facebook}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a>LinkedIn</a>
            <a>Youtube</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29" 
                    facebook="https://google.com"/>
            <Equipe nome="Henrique" cargo="Designer" idade="19" 
                    facebook="https://google.com"/>                    
            <Equipe nome="Amanda" cargo="Front-end" idade="24" 
                    facebook="https://google.com"/>             
        </div>
    );
}

export default App;
*/

/*
34. Aplicando Class component

import React, { Component } from "react";

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome}
                       cargo={this.props.cargo}
                       idade={this.props.idade}/>
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade} anos</h3>
            </div>
        );
    }
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Programador" idade="24"/>
            <Equipe nome="Lucas" cargo="Designer" idade="20"/>
        </div>
    )
}


export default App;
*/

/*

35. Trabalhando com states

import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador +=1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('Opa chegou a zero!');
            return;
        }

        state.contador -=1;
        this.setState(state)
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                
                <h3>
                    <button onClick={this.diminuir}>-</button> 
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button> 
                </h3>    
            </div>
        );
    }
}

export default App;

*/

/*
37. Ciclo de vida dos componentes

import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
         };
    }
    
    componentDidMount(){

        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);

    }
    
    componentDidUpdate(){
        console.log('Atualizou!!!');
    }

        
    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;
*/

/*
39. Eventos
import React, { Component } from 'react';
import Membro from './components/Membro';

class App extends Component{

    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
            </div>
        );
            
    }
}

export default App;

*/

/*40. Renderização condicional

=================  40.1 Exemplo 1 =======================

import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: 1
        };
    }

    render(){
        return(
            <div>
                {this.state.status === 1 &&
                    <h1>Bem-vindo ao sistema!</h1>
                }

                <div>
                    <h2>Curso React JS</h2>
                </div>
            </div>
        );
    }
}

export default App;

=================  40.2 Exemplo 2 =======================

import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false});
    }

    entrar(){
        this.setState({status: true});
    }

    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                    <h2>Bem-vindo ao sistema</h2>
                    <button onClick={this.sair}>Sair</button>
                </div> :
                <div>
                    <h2>Olá visitante, faça o login</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>
                }

            </div>
        );
    }
}

export default App;

*/

/* 41. Trabalhando com Listas

import React, { Component } from "react";
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username: 'Matheus', curtidas:10, comentarios:2},
                {id: 2, username: 'Lucas', curtidas:120, comentarios:24},
                {id: 3, username: 'Amanda', curtidas:30, comentarios:12},
                {id: 4, username: 'Ricardo', curtidas:1, comentarios:0},
            ]
        };
    }

    render(){
        return(
            <div>
                
                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username}
                              curtidas={item.curtidas}
                              comentarios={item.comentarios}/>
                    );
                })}
            </div>
        );
    }
}

export default App;

*/

/* 42. Manipulando formularios

import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: 'Masculino'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSexo(e){
        this.setState({sexo: e.target.value});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email}
                       onChange={this.trocaEmail}/>
                <br/>
                Senha:
                <input type="password" name="senha" value={this.state.senha}
                       onChange={(e) => this.setState({senha: e.target.value})}
                />
                <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo}
                        onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.sexo}</h3>
                </div>
            </div>
        );
    }

}

export default App;
*/

/* 43. Praticando formularios

import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event){
        const {nome, email, senha} = this.state;

        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        }else{
            this.setState({error: 'Ops! Parece que está faltando algo!'});
        }
        
        

        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                        onChange={ (e) => this.setState({nome: e.target.value})}
                        />
                    <br/>
                    <label>Email:</label>
                    <input type="email" value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}
                        />
                    <br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha}
                        onChange={ (e) => this.setState({senha: e.target.value})}
                        />
                    <br/>        
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default App;
    
*/

/* 44. Manipulando formularios

import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            form:{
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        }

        this.dadosForm = this.dadosForm.bind(this);

    }

    dadosForm(e){
        let form = this.state.form;
        form.[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome:
                <input type="text" name="nome" value={this.state.form.nome}
                       onChange={this.dadosForm}/>
                <br/>
                Email:
                <input type="email" name="email" value={this.state.form.email}
                       onChange={this.dadosForm}/>
                <br/>
                Senha:
                <input type="password" name="senha" value={this.state.form.senha}
                       onChange={this.dadosForm}
                />
                <br/>
                Sexo:
                <select name="sexo" value={this.state.form.sexo}
                        onChange={this.dadosForm}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <div>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>
            </div>
        );
    }

}

export default App;

*/

/* 45. Projeto Biscoito da Sorte

import React, { Component } from "react";
import './estilo.css'

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };


        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.',
                       'O bom-senso vale mais do que muito',
                       'O riso é a menor distância entre duas pessoas.',
                       'Deixe de lado as preocupações e seja feliz.',
                       'Realize o óbvio, pense no improvável e conquiste o impossível,', 
                       'Acredite em milagres, mas não dependa deles.',
                       'A maior barreira para o sucesso é o medo do fracasso.'];
    }
    
    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);

    }


    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>

        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;

*/
