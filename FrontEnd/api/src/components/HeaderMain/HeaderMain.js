/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HeaderMain.css'

import {Link} from 'react-router-dom'

import LogoMagna from '../../images/LogoMagna.png'

function HeaderMain() {
    return(

        <header>

            <div className='container'>
                <div >
                    <img className='logo' src={LogoMagna} />
                </div>

                <div >
                    
                    <Link to="/post">
                        <button className='botaoPost'> ADD NEW POST </button>
                    </Link>

                </div>
            </div>

        </header>

    );
}

export default HeaderMain;