import React from "react";
import styles from './DivisionLanguages.module.css';
import iconHtml5 from '../../assets/icons/languages/icon-html5.webp';
import iconCss3 from '../../assets/icons/languages/icon-css3.webp';
import iconJs from '../../assets/icons/languages/icon-js.webp';
import iconBootstrap from '../../assets/icons/languages/icon-bootstrap.webp';
import iconJquery from '../../assets/icons/languages/icon-jquery.webp';
import iconNode from '../../assets/icons/languages/icon-node.webp';
import iconAjax from '../../assets/icons/languages/icon-ajax.webp';
import iconMysql from '../../assets/icons/languages/icon-mysql.webp';
import iconReact from '../../assets/icons/languages/icon-react.webp';
import iconPhp from '../../assets/icons/languages/icon-php.webp';
import iconPython from '../../assets/icons/languages/icon-python.webp';
import iconKotlin from '../../assets/icons/languages/icon-kotlin.webp';
import iconWordpress from '../../assets/icons/languages/icon-wordpress.webp';
import iconGithub from '../../assets/icons/languages/icon-github.webp';
import iconVsCode from '../../assets/icons/languages/icon-vscode.webp';

export default function DivisionLanguages() {
    return (
        
            <div className={`${styles.section} ${styles.theme}`}>
                <div className={styles.sectionList}>
                    <img src={iconHtml5} width="180px" height="130px" loading="lazy" alt="image-html5" />
                    <img src={iconCss3} width="210px" height="160px" loading="lazy" alt="image-css3" />
                    <img src={iconJs} width="180px" height="130px" loading="lazy" alt="image-js" />
                    <img src={iconBootstrap} width="230px" height="180px" loading="lazy" alt="image-bootstrap" />
                    <img src={iconJquery} width="220px" height="170px" loading="lazy" alt="image-jquery" />
                    <img src={iconNode} width="180px" height="147px" loading="lazy" alt="image-nodejs" />
                    <img src={iconAjax} width="240px" height="190px" loading="lazy" alt="image-ajax" />
                    <img src={iconMysql} width="190px" height="140px" loading="lazy" alt="image-mysql" />
                    <img src={iconReact} width="200px" loading="lazy" height="150px" alt="image-react" />
                    <img src={iconPhp} width="230px" height="100px" loading="lazy" alt="image-php" />
                    <img src={iconPython} width="180px" height="130px" loading="lazy" alt="image-python" />
                    <img src={iconKotlin} width="230px" height="180px" loading="lazy" alt="image-kotlin" />
                    <img src={iconWordpress} className={styles.imageAjust} width="230px" height="114px" loading="lazy" alt="image-wordpress" />
                    <img src={iconGithub} className={styles.imageAjust} width="230px" height="205px" loading="lazy" alt="image-github" />
                    <img src={iconVsCode} className={styles.imageAjust} width="190px" height="165px" loading="lazy" alt="image-vscode" />
                </div>

                <div className={styles.sectionList}>
                    <img src={iconHtml5} width="180px" height="130px" loading="lazy" alt="image-html5" />
                    <img src={iconCss3} width="210px" height="160px" loading="lazy" alt="image-css3" />
                    <img src={iconJs} width="180px" height="130px" loading="lazy" alt="image-js" />
                    <img src={iconBootstrap} width="230px" height="180px" loading="lazy" alt="image-bootstrap" />
                    <img src={iconJquery} width="220px" height="170px" loading="lazy" alt="image-jquery" />
                    <img src={iconNode} width="180px" height="147px" loading="lazy" alt="image-nodejs" />
                    <img src={iconAjax} width="240px" height="190px" loading="lazy" alt="image-ajax" />
                    <img src={iconMysql} width="190px" height="140px" loading="lazy" alt="image-mysql" />
                    <img src={iconReact} width="200px" loading="lazy" height="150px" alt="image-react" />
                    <img src={iconPhp} width="230px" height="100px" loading="lazy" alt="image-php" />
                    <img src={iconPython} width="180px" height="130px" loading="lazy" alt="image-python" />
                    <img src={iconKotlin} width="230px" height="180px" loading="lazy" alt="image-kotlin" />
                    <img src={iconWordpress} className={styles.imageAjust} width="230px" height="114px" loading="lazy" alt="image-wordpress" />
                    <img src={iconGithub} className={styles.imageAjust} width="230px" height="205px" loading="lazy" alt="image-github" />
                    <img src={iconVsCode} className={styles.imageAjust} width="190px" height="165px" loading="lazy" alt="image-vscode" />
                </div>
            </div>
        
    )
}