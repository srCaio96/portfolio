import React from "react";
import styles from './DropdownToggle.module.css';
import useDropdownToggle from "../../hooks/useDropdownToggle";

export default function dropdownToggle({onSelectLanguage, languages}) {
    const {open, isOpen, listRef, containerRef} = useDropdownToggle();

    return (
        <div ref={containerRef} className={styles.section} >
            <button className={`${styles.dropdownControls} btn btn-secondary dropdown-toggle`} 
                type="button" aria-expanded={open} aria-label="Courses-List" 
                onClick={() => isOpen(true)}></button>
            
                <nav ref={listRef} className={`${styles.theme} ${styles.navList} ${open ? styles.open : ''}  
                btn-group`}>
                    <ul className={`text-center list-group`} onClick={() => isOpen(true)}>
                        {languages.map((lang, i) => (
                            <li key={lang}  style={{transitionDelay: `${i * 40}ms`}} 
                                className={`tool-${lang.toLowerCase()} list-group-item`} 
                                onClick={() => onSelectLanguage(lang)}>{lang}</li>
                        ))}
                    </ul>
                </nav>       
        </div>
    )
}