import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div>
                
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