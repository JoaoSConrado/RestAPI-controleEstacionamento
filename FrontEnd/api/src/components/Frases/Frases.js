/* eslint-disable jsx-a11y/alt-text */
import './fraseLandingPage.css'

import aspasLanding from '../../images/aspasLanding.png'

export function FraseLandingPage() {
    return (
        <>

            <section className='section-frase-landing'>
                <h1 className='frase-landing'> <span className='fraseSpan'>MISSÃO:</span> <br /> Atender o mercado corporativo com <br />
                soluções inovadoras e efetivas de alto <br /> valor agregado e excelência em <br /> <span className='fraseSpan2'>qualidade, custo e prazo</span>.</h1>

                <div className='div-aspas-frase-landing'>
                    <img className='imagem-aspas-frase-landing' src={aspasLanding} />
                </div>
            </section>



        </>

    )
}