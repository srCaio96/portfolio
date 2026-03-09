import React from "react";
import styles from './Footer.module.css'
import srCaio from '../../assets/images/image-srCaio.webp'
import { faFilePdf, faEnvelope, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmailClick from "../../hooks/useEmailClick";


export default function Footer() {
    const emailClick = useEmailClick;

    return (
            <footer id="aboutMe" className={`${styles.section} ${styles.theme} `}>
                <section className="container-fluid d-flex flex-row justify-content-around flex-wrap">
                    <article className={`col-6 ${styles.imagePage}`}>
                        <img src={srCaio} width="438" height="554" loading="lazy" alt="image-caiosribeiroJP" />
                    </article>

                    <article className={`col-6 ${styles.sectionContent}`}>
                        <h2 className="text-decoration-underline d-flex justify-content-center py-3">Sobre Mim</h2>

                        <div>
                            <p>Sou formado em <strong className={`${styles.textAccentPrimary} 
                                text-decoration-underline`}>Análise e Desenvolvimento de Sistemas</strong> e, nos 
                                meus tempos livres, continuo me especializando por meio de cursos focados 
                                em <strong className={`${styles.textAccentPrimary} text-decoration-underline`}>  
                                desenvolvimento web</strong>, sempre buscando evoluir meus 
                                conhecimentos e me manter atualizado com as principais tecnologias do 
                                mercado.</p>
                        
                            <p>Atualmente possuo:</p>
                            <p>🔹Conhecimentos <span className="text-decoration-underline">sólidos</span> em:</p>
                            <p><span className={`${styles.textAccentPrimary}`}>HTML, CSS, JavaScript, 
                                Bootstrap, React, jQuery, MySQL, Git, GitHub, VS Code</span></p>
                            
                            <p>🔹Conhecimentos <span className="text-decoration-underline">intermediários</span> em:</p>
                            <p><span className={`${styles.textAccentPrimary}`}>AJAX, Excel (Pacote Office), 
                                Inglês (nível intermediário – B2)</span></p>
                        
                            <p>🔹Conhecimentos <span className="text-decoration-underline">básicos</span> em:</p> 
                            <p><span className={`${styles.textAccentPrimary}`}>Python, PHP, Ionic, WordPress, 
                                Espanhol (nível básico - A2)</span></p>

                            <p>Estou em busca da minha primeira oportunidade profissional na área de TI para 
                                <span>colocar em prática tudo o que venho estudando</span>, continuar me 
                                desenvolvendo e, futuramente, <strong className={`${styles.textAccentPrimary} text-decoration-underline`}>contribuir com soluções criativas e 
                                eficientes para o mercado de tecnologia.</strong></p>
                        </div>
                    </article>
                </section>

                <div id="contact" className={`${styles.sectionList} container`}>
                    <h2 className="text-light text-center mb-5">Vamos nos conectar!? <FontAwesomeIcon 
                    className={styles.iconSecondary} icon={faArrowTurnDown} beat size='fa-xs'></FontAwesomeIcon></h2>
                        
                    <ul className="nav navbar mb-5">
                        <li><a onClick={emailClick} aria-label="enviar email para 
                            CaiosribeiroJP" rel="noopener noreferrer"><FontAwesomeIcon 
                            className={styles.iconPrimary} icon={faEnvelope} size='2xl' /></a></li>			
                        <li><a href="https://github.com/srCaio" 
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
            
                    <strong><p className={styles.textAccentSecondary}>© srCaio</p></strong>  
                </div>
           </footer>
    )
};