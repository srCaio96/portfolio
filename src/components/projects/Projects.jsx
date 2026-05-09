import React from "react";
import styles from './Projects.module.css';
import Card from "../card/Card";
import featuredProjects from '../../../data/featuredProjects.json';
import otherProjects from '../../../data/otherProjects.json';
import { motion, scale } from "framer-motion";

export default function Projects() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: .08
            }
        }
    };
    const item = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.98
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: .4,
                ease: 'easeOut'
            }
        }
    }

    return (
        <section id="projects" className={`${styles.section} ${styles.theme} py-5`}>
                <article> 
                    <h1 className={`${styles.pageTitlePrimary} d-flex 
                        justify-content-center my-5 py-5 `}>Projetos Em Destaque</h1>

                    <motion.div className="d-flex flex-row flex-wrap justify-content-evenly" 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: .15}}>
                            {featuredProjects.map(project => (
                                <Card key={project.id}
                                    {...project}
                                    variants={item}
                                    featured />                        
                            ))}            
                    </motion.div>
                </article>
                
                <article>
                    <h1 className={`${styles.pageTitleSecondary} d-flex
                        justify-content-center my-5 py-5`}>Outros Projetos</h1>
                    <motion.div className="d-flex flex-row flex-wrap justify-content-evenly"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: .15}}>

                        {otherProjects.map(project => (
                            <Card key={project.id} 
                                {...project}
                                variants={item}/>
                        ))}        
                    </motion.div>
                </article>         
        </section>   
    )
    
};