import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Filme(){
    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //Tentou acessar com um ID que nao existe, navego ele para home!
                history.replace('/');
                return;
            }

            //console.log(response.data);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return () => {
            console.log('COMPONENTE DESMONTADO');
        }

    }, [history, id]);


    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>    
        )
    }
    
    return(
        <div className="filme-info">
            <h1> {filme.nome} </h1>
            <img src={filme.foto} alt={filme.nome} />
            
            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={()=>{}}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>

            </div>
        </div>
    );
}
