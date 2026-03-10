import React from "react";
import styles from './Projects.module.css';
import useChoiceProject from "../../hooks/useChoiceProject";
import useSetProject from "../../hooks/useSetProject";
import useCarousel from "../../hooks/useCarousel";
import useSearchLanguage from "../../hooks/useSearchLanguage";
import DropdownToggle from "../dropdownToggle/DropdownToggle";
import useDropdownToggle from "../../hooks/useDropdownToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    const {project, opProject} = useChoiceProject();
    const {dataC, dataP, loading} = useSetProject();
    const {tool, language} = useSearchLanguage();
    const data = project === 'academicos' ? dataC : dataP;
    const filtered = data.filter(p => p.tools.includes(tool));
    const {index, prev, next, goTo} = useCarousel(filtered.length);
    const current = filtered[index] ?? null
    const allTools = [...new Set(data.flatMap(p => p.tools))];
    const {isOpen} = useDropdownToggle();
    
    if(loading) return <p className="my-5">Carregando...</p>

    return (
        <section id="projects" className={`${styles.section} ${styles.theme} py-5`}>
            <h1 className={`${styles.headingPage} d-flex justify-content-center my-5 py-5 `}>Projetos</h1> 

            <div className={` d-flex flex-row justify-content-around flex-wrap`}>              
                <h3 className={`${styles.tabTitle} ${project === 'academicos' ? styles.active : ''} 
                    my-5 col-6`} onClick={() => opProject('academicos')}>Acadêmicos</h3>
                <h3 className={`${styles.tabTitle} ${project === 'pessoais' ? styles.active : ''} 
                    my-5 col-6`} onClick={() => opProject('pessoais')}>Pessoais</h3>
            </div>

            {project === 'academicos' ? <DropdownToggle languages={allTools} onSelectLanguage={language}/> : ''}
           
            <article className='d-flex row justify-content-center'>
                    {current && (
                        <div key={current.id} className='container d-flex row'>
                            <div className={`${styles.card}`}>
                                <i className='fullscreen fa-solid fa-expand fa-2xl'></i>
                    
                                <span className={styles.cardHeading}>
                                    <a className="nav-link" href={current.url} target="_blank">{current.name}</a>
                                </span>

                                <iframe id={current.id} src={current.url} allowFullScreen></iframe>

                                <span className={styles.cardContent}>{current.description} </span>
                                <span className="text-info bg-dark"><a href={current.gitHub ?? null} target="_blank"
                                    rel="noopener noreferrer">Código Aqui!</a></span>
                               
                                <span className={styles.cardList}>
                                    {current.tools.map(tool => (
                                        <p key={tool} 
                                        className={`${styles.badge} tool-${tool.toLowerCase()}`}>{tool}</p>
                                    ))} 
                                </span>              
                            </div>
                        </div>
                    )}     
        
                    <div className={`${styles.carouselControls} d-flex row justify-content-between`}>
                        <button className={`${styles.prev} mt-5 `} onClick={prev}>
                            <FontAwesomeIcon icon={faAnglesLeft} size="2xl" />
                        </button> 

                        <button className={`${styles.next} mt-5 `} onClick={next}>
                            <FontAwesomeIcon icon={faAnglesRight} size="2xl" /> 
                        </button>
                    </div>
                    
                    <div className='d-flex justify-content-center m-5'>
                        
                        {filtered.map((_, i) => (
                            <button key={i} onClick={() => {goTo(i)}}
                            className={`${styles.carouselButtons} ${i === index ? styles.active : ''}`} />      
                        ))} 
                    </div>
            </article>
        </section>
        
    )
    
};