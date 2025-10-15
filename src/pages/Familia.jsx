import React from 'react'
import homeLogo from '../img/home.png'
import emailLogo from '../img/email.png'
import phoneLogo from '../img/phone-call.png'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import logoTPR from '../img/logoTPR.jpeg'


export default function Familia() {

	return (
		<>
		<Hero title='Ośrodek Pro Familia w Poznaniu'>
			<Navbar title='Towarzystwo Przywracania Rodziny' 
			logo={logoTPR}
			></Navbar>
		</Hero>
		<div className="wrapper">
			<section id="familia" className="section section--margin">
				<div className="section__info">
					<h4 className="section__title">Komunikat</h4>
					<p className="section__text">
						Chrześcijański Ośrodek Adopcyjny „Pro Familia” informuje, że Zarząd Towarzystwa Przywracania Rodziny podjął
						uchwałę o rozwiązaniu (likwidacji) Ośrodka z dniem 31.12.2021r. Decyzja ta została podjęta w związku z
						zakończeniem kolejnej umowy na prowadzenie Ośrodka i brakiem ogłoszenia konkursu przez Marszałka Województwa
						Wielkopolskiego na prowadzenie niepublicznych ośrodków adopcyjnych w Województwie na kolejne lata, co
						uniemożliwia dalszą działalność.
					</p>
					<p className="section__text">
						Biorąc pod uwagę powyższe oraz ustalenia z Regionalnym Ośrodkiem Polityki Społecznej w Poznaniu, prosimy o
						kierowanie wszelkich spraw merytorycznych związanych z dotychczasową współpracą z Ośrodkiem „Pro Familia” do
						Wielkopolskiego Ośrodka Adopcyjnego w Poznaniu.
					</p>
				</div>
			</section>
			<section className="section section--margin contact">
			<h3 className="section__title"> Kontakt</h3>
				<div className="tpr__box">
					<p className="contact__title">Wielkopolski Ośrodek Adopcyjny w Poznaniu</p>
					<img className="contact__icon" src={homeLogo}></img>
					<p className="contact__title">Adres</p>
					<p className="contact__text">ul. Nowowiejskiego 11</p>
					<p className="contact__text"> 61-731 Poznań</p>
					<img className="contact__icon" src={phoneLogo}></img>
					<p className="contact__title">Telefon</p>
					<p className="contact__text">tel. 61 8567300</p>
					<img className="contact__icon" src={emailLogo}></img>
					<p className="contact__title">E-mail</p>
					<p className="contact__text">rops@rops.poznan.pl</p>
				</div>
			</section>
			</div>
		</>
	)
}
