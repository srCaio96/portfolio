import React from "react";
import styles from './Header.module.css'
import {motion, AnimatePresence} from 'framer-motion';
import useDropdownToggle from "../../hooks/useDropdownToggle";
import useScrollView from "../../hooks/useScrollView";

export default function Header() {
	const {onOpen, onClose, open, containerRef} = useDropdownToggle();
	const {active} = useScrollView();

    return (
        <nav className={`${styles.nav} ${styles.theme} navbar-expand-sm fixed-top`}>
			<ul className='nav navbar justify-content-around'> 
				<li className="nav-item"> 
					<h3 className='navbar-brand fw-bold'>
						<a className={`${styles.pageTitle} ${active === 'main' ? 
							styles.activeSecondary : ''} nav-link link-dark`} href="#">srCaio</a> 
					</h3> 
				</li>

				<ul className={`${styles.navDesactive} nav navbar`}>
					<li className="nav-item"> 
						<a className={`${active === 'projects' ? styles.activePrimary : ''} d-inline m-3 
							link-light link-opacity-75 link-underline link-underline-opacity-0 
							link-underline-opacity-75-hover fw-semibold`} href="#projects" 
							onClick={onClose}>Projetos</a> 
					</li> 

					<li className="nav-item"> 
						<a className={`${active === 'aboutMe' ? styles.activePrimary : ''} d-inline m-3 link-light 
							link-opacity-75 link-underline link-underline-opacity-0 link-underline-opacity-75-hover 
							fw-semibold`} href="#aboutMe" onClick={onClose}>Sobre Mim</a> 
					</li> 

					<li className="nav-item"> 
						<a className={`${active === 'contact' ? styles.activePrimary : ''} d-inline m-3 link-light 
							link-opacity-75 link-underline link-underline-opacity-0 link-underline-opacity-75-hover 
							fw-semibold`} href="#contact" onClick={onClose}>Contato</a> 
					</li> 
				</ul>

				<button className='nav-item navbar-toggler border border-black border' type="button" onClick={onOpen}>
					<span className="navbar-toggler-icon"></span> 
				</button> 
			</ul>  

			

			<AnimatePresence> 
				{open && ( 
					<motion.div  
						onClick={onClose} 
						initial={{opacity: 0}} 
						animate={{opacity: .5}} 
						exit={{opacity: 0}} 
						transition={{duration: .3}}/> 
				)} 
			</AnimatePresence> 

			<AnimatePresence> 
				{open && ( 
					<motion.div 
						className='position-fixed top-0 start-0 w-100 button-links text-bg-dark fw-semibold ' 
						initial={{y: '-100%'}} 
						animate={{y: '0%'}} 
						exit={{y: '-100%'}}
						transition={{duration: 0.4, ease: 'easeOut'}}
					> 
						<motion.ul ref={containerRef} 
							className={`${styles.navActive} navbar navbar-nav d-flex flex-wrap`}
							initial="hidden"
							animate="visible"
							variants={{
								hidden: {},
								visible: {
									transation: {
										staggerChildren: .1
									}
								}
							}}> 
							<motion.li className="nav-item"
								variants={{
									hidden: {opacity: 0, y: -20},
									visible: {opacity: 1, y: 0}
							}}> 
								<a className="d-inline m-3 link-light link-opacity-75 link-underline 
									link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
									href="#projects" onClick={onClose}>Projetos</a> 
							</motion.li> 

							<motion.li className="nav-item"
								variants={{
									hidden: {opacity: 0, y: -20},
									visible: {opacity: 1, y: 0}
							}}> 
								<a className="d-inline m-3 link-light link-opacity-75 link-underline 
									link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
									href="#aboutMe" onClick={onClose}>Sobre Mim</a> 
							</motion.li> 

							<motion.li className="nav-item"
								variants={{
									hidden: {opacity: 0, y: -20},
									visible: {opacity: 1, y: 0}
							}}>  
								<a className="d-inline m-3 link-light link-opacity-75 link-underline 
									link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
									href="#contact" onClick={onClose}>Contato</a> 
							</motion.li> 
						</motion.ul> 
					</motion.div> 
				)} 
			</AnimatePresence> 
		</nav>
    );
}