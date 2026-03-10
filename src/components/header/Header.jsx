import React from "react";
import styles from './Header.module.css'

export default function Header() {
    return (
        <nav className={`${styles.nav} ${styles.theme} nav navbar navbar-expand-lg fixed-top mb-5 justify-content-between`}>    
			<li className="nav-item">
				<h3 className={`${styles.headingPage} nav-brand fw-bold`} href="#">
					<a className={styles.headingPage} href="#">CaiosribeiroJP</a>
				</h3>		
			</li>

			<div className={`${styles.navbarToggle} offcanvas-top`}>
				<button className="navbar-toggler border border-black m-3" type="button" data-bs-toggle="offcanvas" data-bs-target=".button-links">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>

			<div className=" navbar nav offcanvas offcanvas-top button-links text-bg-dark fw-semibold" data-bs-scroll = 'true' tabIndex="-1">
				<ul className={`${styles.navActive} nav navbar navbar-nav`}>
					<li className="nav-item">
						<a className="d-inline m-3 link-light link-opacity-75 link-underline 
						link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
						href="#projects">Projetos</a>
					</li>

					<li className="nav-item">
						<a className="d-inline m-3 link-light link-opacity-75 link-underline 
						link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
						href="#aboutMe">Sobre Mim</a>
					</li>

					<li className="nav-item">
						<a className="d-inline m-3 link-light link-opacity-75 link-underline 
						link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" 
						aria-disabled="true" href="#contact">Contato</a>
					</li>
				</ul>
			</div>
		</nav>
    )    
};