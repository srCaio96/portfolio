import React from "react";
import styles from './Footer.module.css'
import imgFooter from '../../assets/images/image-pc.webp';
import { faFilePdf, faEnvelope, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmailClick from "../../hooks/useEmailClick";
import { motion } from "framer-motion";


export default function Footer() {
    const emailClick = useEmailClick;
    const footerVariant = {
        hidden: {opacity: 0, y: 30},
        show: {
            opacity: 1,
            y: 0,
            transition: {duration: .5}
        }
    }

    return (
            <footer className={`${styles.section} ${styles.theme} `}>
                <motion.section className="container-fluid d-flex flex-row justify-content-around flex-wrap"
                    variants={footerVariant}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: .2}}>
                    <article className={`col-6 ${styles.pageImg} d-flex align-items-center`}>
                        <img src={imgFooter} width="438" height="554" loading="lazy" alt="image-pc" />
                    </article>

                    <article  className={`col-6 ${styles.sectionText}`}>
                        <h2 className="text-decoration-underline d-flex justify-content-center py-3">Sobre Mim</h2>

                        <div >
                            <p>Desenvolvedor<strong className={`${styles['sectionText--primary']} 
                                `}> Front-End</strong> com foco em <strong className={`${styles['sectionText--primary']} 
                                `}>React</strong>.</p> 

                            <p> Crio <strong className={`${styles['sectionText--primary']}`}> interfaces modernas</strong>, 
                                <strong className={`${styles['sectionText--primary']}`}> responsivas, </strong> 
                                e com <strong className={`${styles['sectionText--primary']}`}>
                                boa experiência de usuário</strong>.</p>
                        
                            <p id="contact">Formado em <span className={`${styles['sectionText--primary']}`}>Análise e 
                                Desenvolvimento de Sistemas</span></p>
            
                            <p>Experiência em
                                <span className={`${styles['sectionText--primary']}`}> aplicações web</span>, 
                                <span className={`${styles['sectionText--primary']}`}> código organizado</span>, 
                                <span className={`${styles['sectionText--primary']}`}> performance</span> e 
                                <span className={`${styles['sectionText--primary']}`}> fácil de manter</span>.</p>
                        
                            <p>🚀 Tecnologias principais:</p> 
                            <p><span className={`${styles['sectionText--primary']}`}>React • JavaScript • TypeScript • HTML • CSS</span></p>
                            
                            <p>🛠️ Também utilizo:</p> 
                            <p><span className={`${styles['sectionText--primary']}`}>Tailwind CSS • Bootstrap • MySQL • Git • GitHub</span></p>
                        </div>
                    </article>
                </motion.section>

                <div  className={`${styles.sectionList} container`}>
                    <h2 className="text-light text-center mb-2">Vamos trabalhar juntos ? <FontAwesomeIcon 
                    className={styles.iconSecondary} icon={faArrowTurnDown} beat size='fa-xs'></FontAwesomeIcon></h2>
                        
                    <ul className="nav navbar mb-5">
                        <li><a onClick={emailClick} aria-label="enviar email para 
                            srCaio" rel="noopener noreferrer"><FontAwesomeIcon 
                            className={styles.iconPrimary} icon={faEnvelope} size='2xl' /></a></li>			
                        <li><a href="https://github.com/srCaio96" 
                            target="_blank" aria-label="github"><FontAwesomeIcon className={styles.iconPrimary} 
                            icon={faSquareGithub} size='2xl' /></a></li>
                        <li><a href="http://www.linkedin.com/in/srCaio" 
                            target="_blank" aria-label="linkedin"><FontAwesomeIcon className={styles.iconPrimary} 
                            icon={faLinkedin} size='2xl' /></a></li>
                        <li><a href="docs/resume.pdf" target="_blank" 
                            rel="noopener noreferrer" aria-label="Caio_Santos_Ribeiro_Curriculum">
                            <FontAwesomeIcon className={styles.iconPrimary} icon={faFilePdf} size='2xl' 
                         /></a></li>
                    </ul>
            
                    <strong><p className={styles['sectionText--secondary']}>© srCaio</p></strong>  
                </div>
           </footer>
    )
};