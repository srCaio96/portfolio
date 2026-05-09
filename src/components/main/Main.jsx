import React from 'react'
import styles from './Main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import useEmailClick from "../../hooks/useEmailClick";
import srCaio from '../../assets/images/image-srCaio.webp';
import useScrollView from '../../hooks/useScrollView';
import {motion} from 'framer-motion';

export default function Main() {
    const {handleScroll} = useScrollView();
    const emailClick = useEmailClick;
    const heroVariant = {
        hidden: {opacity: 0, y:20},
        show: {
            opacity: 1,
            y: 0,
            transition: {duration: .6, ease: 'easeOut'}
        }
    }

    return (
        <article id='main' className={`${styles.section} ${styles.theme} text-center text-light pb-5 my-5 container-fluid`}>
            <motion.div className={`${styles.pegeTitle} container-fluid d-flex flex-row flex-wrap justify-content-between `}
                variants={heroVariant}
                initial="hidden"
                whileInView="show"> 
                <div className="col-6 mt-5 pt-5">

        <h1 className={`${styles.pageTitlePrimary} p-2`}>Desenvolvedor <span className={styles.accentPrimary}>Front-End </span> 
            com foco em <span className={styles.accentSecondary}>React</span></h1>

        <h3 className='p-2'>Crio <u className={`${styles.accentPrimary} ${styles.reactText}`}>interfaces modernas</u>, <u className={styles.accentPrimary}>rápidas</u> e <u className={styles.accentPrimary}>responsivas</u> com 
            foco em <u className={styles.accentPrimary}>experiência do usuário</u> e <u className={styles.accentPrimary}>performance</u>.</h3>

        <h5 className='p-2'>Especializado em <span className={styles.accentSecondary}>aplicações 
            web com React</span> e <span className={styles.accentPrimary}>boas práticas de código</span>.</h5>

        <div className='container d-flex flex-row justify-content-center'>
            <button type='button' className={`${styles.buttonPrimary} px-5 py-4 mx-5`} 
                onClick={() => handleScroll('projects')}>👉 Ver Projetos</button>
            <button type='button' className={`${styles.buttonSecondary} px-5`} 
                onClick={() => handleScroll('contact')}>Entrar em Contato</button>
        </div>
        <div className='container d-flex flex-row flex-wrap justify-content-center'>
            <ul className="nav p-2">
                <li><a onClick={emailClick} aria-label="enviar email para 
        srCaio" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} 
        icon={faEnvelope} size='lg' /></a>
                </li>	

                <li><a href="https://github.com/srCaio96" 
        target="_blank" aria-label="github"><FontAwesomeIcon className={styles.icon} 
        icon={faSquareGithub} size='lg' /></a>
                </li>

                <li><a href="http://www.linkedin.com/in/srCaio" 
        target="_blank" aria-label="linkedin"><FontAwesomeIcon className={styles.icon} 
        icon={faLinkedin} size='lg' /></a>
                </li>

                <li><a href="docs/resume.pdf" target="_blank" 
        rel="noopener noreferrer" aria-label="Caio_Santos_Ribeiro_Curriculum">
        <FontAwesomeIcon className={styles.icon} icon={faFilePdf} size='lg' /></a>
                </li>
            </ul>
        </div>
                </div>

                <div className={`${styles.pageImg} col-4 d-flex  align-items-center`}>
        <img src={srCaio} width="438" height="300" loading="lazy" alt="image-srCaio" />        
                </div>

            </motion.div>
        </article>
        
    )
}