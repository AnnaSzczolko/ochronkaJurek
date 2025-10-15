import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import burgerIcon from '../img/burger-menu.png'
import closeIcon from '../img/close.png'
import arrowIcon from '../img/arrow_icon.png'


export default function Navbar({title, logo}) {
	console.log(logo)
	console.log(title)
	const tprUl = useRef()
	const JurekUl = useRef()
	const NavbarRef = useRef()

	const [isMenuOpen, setMenuOpen] = useState(false)

	const [isUlOpen, setUlOpen] = useState(null)

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
		}

		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	useEffect(()=> {
		const handleCLickOutside = (e) => { 
			if(NavbarRef.current && !NavbarRef.current.contains(e.target)){

				setUlOpen(null)
			}
		}
		document.addEventListener('mousedown', handleCLickOutside)

		return () => {
			document.removeEventListener('mousedown', handleCLickOutside)
		}
	}, [])

	useEffect(() => {
		if (isMenuOpen && isMobile) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [isMenuOpen, isMobile])

	const menuToggle = () => {
		setMenuOpen(!isMenuOpen)
		setUlOpen(null)
	}

	const ulToggle = ref => {
		setUlOpen(prevValue => (prevValue === ref ? null : ref))
	}


	return (
		<header className='header'>
		<div className="wrapper">
			<div className="header__content">
				<div className="header__box">
					<img className="header__icon" src={logo} alt="icon" />
					{/* <h2 className="header__title">{title}</h2> */}
				</div>
				<nav ref={NavbarRef} className={`${'navbar'} ${isMenuOpen ? 'isMenu' : ' '}`}>
					<ul className="navbar__ul">
						<li className="navbar__li">
							<button ref={tprUl} className="navbar__btn" onClick={() => ulToggle(tprUl.current)}>
								Towarzystwo Przywracania Rodziny
								<img
									className={isUlOpen === tprUl.current ? 'navbar__arrow rotate' : 'navbar__arrow'}
									src={arrowIcon}
									alt="arrow icon"
								/>
							</button>
							<ul
								className={
									isUlOpen === tprUl.current ? 'navbar__ul navbar__ul--sm hidden ' : 'navbar__ul navbar__ul--sm '
								}>
								<li className="navbar__li navbar__li--sm">
									<Link className="navbar__link navbar__link--sm" onClick={menuToggle} to="/#aboutTPR">
										O nas
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link className="navbar__link navbar__link--sm" onClick={menuToggle} to="/#missionTPR">
										misja
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link className="navbar__link navbar__link--sm" onClick={menuToggle} to="/#historyTPR">
										historia
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link className="navbar__link navbar__link--sm" onClick={menuToggle} to="/#documentsTPR">
										dokumenty
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link className="navbar__link navbar__link--sm" onClick={menuToggle} to="/#contactTPR">
										kontakt
									</Link>
								</li>
							</ul>
						</li>
						<li className="navbar__li">
							<button ref={JurekUl} className="navbar__btn" onClick={() => ulToggle(JurekUl.current)}>
								Ochronka Jurek
								<img
									className={isUlOpen === JurekUl.current ? 'navbar__arrow rotate' : 'navbar__arrow'}
									src={arrowIcon}
									alt="arrow icon"
								/>
							</button>
							<ul
								className={
									isUlOpen === JurekUl.current ? 'navbar__ul navbar__ul--sm hidden' : 'navbar__ul navbar__ul--sm '
								}>
								<li className="navbar__li navbar__li--sm">
									<Link to="/ochronkaJurek#aboutJUREK" className="navbar__link navbar__link--sm" onClick={menuToggle}>
										O nas
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link to="/ochronkaJurek#supportJUREK" className="navbar__link navbar__link--sm" onClick={menuToggle}>
										Wsparcie
									</Link>
								</li>
								<li className="navbar__li navbar__li--sm">
									<Link to="/ochronkaJurek#contactJUREK" className="navbar__link navbar__link--sm" onClick={menuToggle}>
										Kontakt
									</Link>
								</li>
							</ul>
						</li>

						<li className="navbar__li">
						
							<NavLink
								onClick={menuToggle}
								className={isActive => (isActive ? 'navbar__link active' : 'navbar__link')}
								to="/ośrodekProFamilia">
								ośrodek „Pro Familia”
							</NavLink>
						</li>
					</ul>
				</nav>
				<button className="header__btn" onClick={menuToggle}>
					<img src={isMenuOpen ? closeIcon : burgerIcon} alt="" />
				</button>
			</div>
		</div>
		</header>
	)
}
