import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

export default function Card({name, img, url, description, highlight, tools, gitHub, featured, variants}) {
    return (
        <motion.div className={`${styles.card} ${featured ? styles.featured : styles.standard} 
            mx-3 my-5 col-4 p-4`} 
            variants={variants}
            whileHover={{
                y: -6,
                scale: 1.02
            }}
            transition={{duration: .2}}>
    
            <span className={styles.cardTitle}>
                <a className="nav-link" href={url} target="_blank"><u>{name}</u></a>
            </span>

            <div className={styles.imageWrapper}>
                <img className="my-2" src={img} alt={name} />
            </div>
                
            <div className={`${styles.cardText} my-4`}>
                <span>{description} </span>
            </div>

            <div className={`${styles.cardTextHighlight} my-4`}>{highlight.map(highlight => (
                <div>
                    <span className={styles.icon}>✔</span> <i>{highlight}</i>
                </div> 
            ))}
            </div>

            <div className={`${styles.cardList} my-4`}>
                {tools.map(tool => (
                <span key={tool} 
                    className={`${styles.badge} tool-${tool.toLowerCase()}`}>{tool}</span>
                ))} 
            </div>
            
            <div className={`${styles.overlay} d-flex flex-row flex-wrap justify-content-around`}>
                <a href={gitHub ?? null} target="_blank" rel="noopener noreferrer">
                    <button type="button" className={styles.cardButton}>Ver Código</button>
                </a>
                <a href={url ?? null} target="_blank" rel="noopener noreferrer">
                    <button type="button" className={styles.cardButton}>Ver Projeto</button>
                </a> 
            </div>         
        </motion.div>
    );
}