/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';

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
            {posts.map((post, key) => {

                return (
                    <section className='mainCard'>
                        <section className='cards' key={key}>
                            <div className='card' >

                                <h2>REGISTRO N°: {post.id} </h2>
                                <p>{post.numeroVagaEstacionamento}</p>
                                <p>{post.placaCarro}</p>
                                <p>{post.marcaCarro}</p>
                                <p>{post.modeloCarro}</p>
                                <p>{post.corCarro}</p>
                                <p>{post.nomeResponsavel}</p>
                                <p>{post.apartamento}</p>
                                <p>{post.bloco}</p>
                                <p>{post.modeloCarro}</p>

                                <div className='btns'>
                                    <div className='btn-edit'>
                                        <Link to={{ pathname: `/edit/${post.id}` }}>
                                            <button>Edit</button>
                                            </Link>
                                    </div>

                                    <div className='btn-delete'>
                                        <button onClick={() => deletePost(post.id) }>Delete</button>                               
                                    </div>
                                </div>
                            </div> 
                        </section>
                    </section>
                )

            })}
        </>
    )

}

export default Cards;