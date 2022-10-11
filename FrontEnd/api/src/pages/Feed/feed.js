import React from 'react';


import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Cards from '../../components/Cards/Cards';
import Cta from '../../components/CTA/Cta.js';
import { SlideComentarios } from '../../components/Slides/SlideComentarios';
import { FraseLandingPage } from '../../components/Frases/Frases';

function Feed() {

    return (
            <div>
                <HeaderMain />
                <Cta />
                <SlideComentarios />
                <FraseLandingPage/>
                <Cards />
            </div>
    )
}

export default Feed;