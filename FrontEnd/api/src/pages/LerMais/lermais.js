import React, {useState, useEffect} from 'react';

import Header from '../../components/Header/Header';

import axios from 'axios'

function Lermais() {

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

    return (
        <>
            <div>
                <Header />

                {posts.map((post, key) => {
                    return (
                        <main>
                        
                            <div className='cards' key={key}>
                                <div className='card'>
                                    <header>
                                        <h2>Consumindo Api</h2>
                                    </header>

                                    <div className='line'></div>

                                    <p>{post.placaCarro}</p>
                                    <p>{post.placaCarro}</p>
                                    <p>{post.placaCarro}</p>
                                    <p>{post.placaCarro}</p>
                                    <p>{post.placaCarro}</p>
                                    

                                </div>
                            </div>
                        </main>
                    )
                })}
            </div>
        </>
    )
}

export default Lermais;