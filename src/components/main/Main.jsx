import React from 'react'
import styles from './Main.module.css'
import imagePc from '../../assets/images/image-pc.webp';
import imageNotebook from '../../assets/images/image-notebook.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons';

export default function Main() {
    return (
        <div>
            <article className={`${styles.section} ${styles.theme} text-center text-light py-5 my-5 container-fluid`}>
                <div className="container row">
                    <img className='col-6' src={imagePc} width="694px" 
                        height="586px" alt="presentation-pc" />

                    <div className="col-6 mt-5">
                        <FontAwesomeIcon icon={faFaceSmileWink} bounce size="2xl" style={{color: "#FFD43B",}}
                            className='my-5' />                    
   
                        <h1 className="p-1 ">Olá, Eu sou</h1>

                        <h1 className={`p-5 ${styles.headingPage}`}> Caio Ribeiro</h1>
                                    
                        <h1 className='p-1'>Seja bem-vindo ao meu portifólio.</h1>	
                    </div>
                </div>

                <div className="container row mt-5">
                    <div className='col-6'>
                        <h1 className='p1'>Desenvolvedor Web</h1>

                        <h1 className='p2'>Front-End</h1>

                        <FontAwesomeIcon className={styles.icon} icon={faBolt} fade size="2xl" /> 
                    </div>

                    <div className='col-6'>
                        <img className='col-6' src={imageNotebook} width="624px" height="500px" alt="presentation-notebook" />
                    </div>
                </div>	
            </article>
        </div>
    )
}