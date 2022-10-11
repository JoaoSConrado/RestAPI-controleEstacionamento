/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';

import {
    FaTrash, FaRegEdit
  } from "react-icons/fa";
  

import More from '../../images/more.svg'
import { Link } from 'react-router-dom';
import axios from 'axios'

import './Cards.css'

function Cards() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        //function só será executada depois da renderização do componente 
        axios.get("http://localhost:8080/vaga-estacionamento")
        .then((response) => {
            setPosts(response.data.content)
        }).catch(() => {
            console.log("DEU ERRADO BURRÃO!")
        })
    }, [])

    function deletePost(id) {

        axios.delete(`http://localhost:8080/vaga-estacionamento/${id}`)

        setPosts(posts.filter(post => post.id !== id))

    }
    
    return (

        <>
            <div>
                <h1>PROJETO REST API COM SPRING BOOT</h1>
                <p>Esse projeto é basicamente a construção de uma Rest API, utilizando o Framework Spring Boot! 
                    A API está sendo consumida no Front-End com AXIOS utilizando React.js. A aplicação está 
                    realizando um CRUD e está conectada a um banco de dados relacional(PostgreSQL)!
                </p>
                <p>  </p>

                <p> O objetivo é que o cliente possa ter um controle sobre a demanda de seus softwares, 
                    Nessa tabela é possivel visualizar, editar e excluir! </p>
            </div>
            

            <div className='card'>  
                <div className='cardTabelaEspecificações'>
                    <ul className='registroCardEspecificaçõesCarro'>
                        <li>INFORMAÇÕES DO CARRRO</li>                                    
                    </ul>

                    <ul className='registroCardEspecificaçõesResponsável'>
                        <li>INFORMAÇÕES DO RESPONSÁVEL</li>                                    
                    </ul>
                </div>

                <div className='cardTabela'>

                    <ul className='registroCard'>
                        <li>N° DA VAGA</li>                                  
                    </ul>

                    <ul className='registroCard'>
                        <li>PLACA</li>                                
                    </ul>

                    <ul className='registroCard'>
                        <li>MARCA</li>                                    
                    </ul>

                    <ul className='registroCard'>
                        <li>MODELO</li>                                  
                    </ul>

                    <ul className='registroCard'>
                        <li>COR</li>                                
                    </ul>
                

                    <ul className='registroCard'>
                        <li>NOME</li>                                
                    </ul>

                    <ul className='registroCard'>
                        <li>APARTAMENTO</li>                                    
                    </ul>

                    <ul className='registroCard'>
                        <li>BLOCO</li>                                  
                    </ul>

                    <ul className='registroCardEditDelete'>
                        <li> </li>                                
                    </ul>
                    

                </div>

                {posts.map((post, key) => {

                    return (
                        <section className='mainCard'>
                            <section className='cards' key={key}>
                                <div className='card' >
                                    <div className='linhaCard'>

                                        <ul className='registroCardLinha'>
                                            <li>{post.numeroVagaEstacionamento}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.placaCarro}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.marcaCarro}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.modeloCarro}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.corCarro}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.nomeResponsavel}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.apartamento}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                            <li>{post.bloco}</li>
                                        </ul>

                                        <ul className='registroCardLinha'>
                                        <div className='btns'>
                                                <div className='btn-edit'>
                                                    <Link to={{ pathname: `/edit/${post.id}` }}>
                                                        <FaRegEdit />
                                                    </Link>
                                                </div>

                                                <div className='btn-delete'>
                                                    <FaTrash onClick={() => deletePost(post.id) }></FaTrash>                               
                                                </div>
                                            </div>
                                        </ul>

                                    </div>

                                    
                                </div> 
                            </section>
                        </section>
                    )

                })}
            </div>

            <div>
                <p> Caso queira visualizar o código fonte, clique: <a href='https://github.com/JoaoSConrado/RestAPI-controleEstacionamento' target="_blank">RestAPI</a></p>
            </div>
        </>
    )

}

export default Cards;