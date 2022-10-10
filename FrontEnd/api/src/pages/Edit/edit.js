/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';

import { useNavigate, useParams } from 'react-router-dom' 

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";


const validationPost = yup.object().shape({
    numeroVagaEstacionamento: yup.string().required(),
    placaCarro: yup.string().required(),
    marcaCarro: yup.string().required(),  
    modeloCarro: yup.string().required(),
    corCarro: yup.string().required(),
    nomeResponsavel: yup.string().required(), 
    apartamento: yup.string().required(),
    bloco: yup.string().required()

})

function Edit() {

    const { id } = useParams();

    let navigate = useNavigate();
 
   const addPost = data => axios.put(`http://localhost:8080/vaga-estacionamento/${id}`, data)
    .then(() => {
       console.log("DEU CERTO!")
        navigate('/')
    }).catch (() => {
        console.log("DEU ERRADO, LARGA DE SER BURRO!")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validationPost)
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/vaga-estacionamento/${id}`) 
        .then((response) => {
            reset(response.data)
        })
    }, [])

    return (
        <>
            <div>
                <Header />

                <main>
                    <div className='card-post'>
                        <h1>Criar Postagem</h1>
                        <div className='line-post'></div>

                        <div className='card-body-post'>
                            <form onSubmit={handleSubmit(addPost)}>

                                <div className='fields'>
                                    <label>numeroVagaEstacionamento</label>
                                    <input type="text" name="numeroVagaEstacionamento" {...register("numeroVagaEstacionamento")}/>
                                    <p className='error-message'>{errors.numeroVagaEstacionamento?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>placaCarro</label>
                                    <input type="text" name="placaCarro" {...register("placaCarro")}/>
                                    <p className='error-message'>{errors.placaCarro?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>marcaCarro</label>
                                    <input type="text" name="marcaCarro" {...register("marcaCarro")}/>
                                    <p className='error-message'>{errors.marcaCarro?.message}</p>
                                </div>

                                
                                <div className='fields'>
                                    <label>modeloCarro</label>
                                    <input type="text" name="modeloCarro" {...register("modeloCarro")}/>
                                    <p className='error-message'>{errors.modeloCarro?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>corCarro</label>
                                    <input type="text" name="corCarro" {...register("corCarro")}/>
                                    <p className='error-message'>{errors.corCarro?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>nomeResponsavel</label>
                                    <input type="text" name="nomeResponsavel" {...register("nomeResponsavel")}/>
                                    <p className='error-message'>{errors.nomeResponsavel?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>apartamento</label>
                                    <input type="text" name="apartamento" {...register("apartamento")}/>
                                    <p className='error-message'>{errors.apartamento?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>bloco</label>
                                    <input type="text" name="bloco" {...register("bloco")}/>
                                    <p className='error-message'>{errors.bloco?.message}</p>
                                </div>






                                <div className='btn-post'>
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Edit;