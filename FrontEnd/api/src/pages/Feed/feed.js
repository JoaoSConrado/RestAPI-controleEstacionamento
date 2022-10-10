/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import axios from 'axios'

import HeaderMain from '../../components/HeaderMain/HeaderMain';
import './Feed.css'

import More from '../../images/more.svg'
import { Link } from 'react-router-dom';

function Feed() {

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
            <div>
                <HeaderMain />
        
                <main>
                    <div className='cards'>

                        {posts.map((post, key) => {

                            return (
                                <div className='card' key={key}>

                            <header>
                                <h2>{post.modeloCarro}</h2>
                                <img className='more' src={More} />
                            </header>

                            <div className='line'></div>

                            <p>Consumindo uma Rest API com o Framework SpringBoot </p>

                            <div className='btns'>
                                <div className='btn-edit'>
                                    <Link to={{ pathname: `/edit/${post.id}` }}>
                                        <button>Edit</button>
                                    </Link>
                                </div>

                                <div className='btn-readmore'>
                                    <Link to='/lermais'>
                                        <button>Ler Mais</button>
                                    </Link>
                                </div>

                                <div className='btn-delete'>
                                    <button onClick={() => deletePost(post.id) }>Delete</button>                               
                                </div>
                            </div>

                        </div>
                            )

                        })}
     
                    </div>
                </main>
            </div>
    )
}

export default Feed;