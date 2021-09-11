import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Sobre" component={Sobre} />            
                <Route exact path="/Contato" component={Contato} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

/* 54. Trabalhando com Rotas

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Sobre" component={Sobre} />            
                <Route path="/Contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

*/