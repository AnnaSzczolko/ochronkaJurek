import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'

import aboutOne from '../img/aboutImg-sm.jpg'
import aboutTwo from '../img/aboutImg2-sm.jpg'

import dostepnosc from '../pdf/dostepnosc.pdf'
import standardy from '../pdf/standardy.pdf'

import homeLogo from '../img/home.png'
import emailLogo from '../img/email.png'
import phoneLogo from '../img/phone-call.png'
import noteLogo from '../img/notes.png'

import facebookLogo from '../img/facebook.png'

export default function HomePage() {
	const { hash } = useLocation()

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [hash])

	return (
		<>
			<Hero title="Ochronka Jurek w Poznaniu">
				<Navbar title="OCHRONKA JUREK"></Navbar>
			</Hero>
			<section id="aboutJUREK" className="section section--margin about">
				<div className="wrapper">
					<h2 className="section__title">O nas</h2>
					<div className="about__box">
						<p className="section__text about__item-1">
							Głównym celem naszej działalności jest pomoc dziecku osamotnionemu w powrocie do rodziny naturalnej, o ile
							jest to możliwe lub umieszczenie go w rodzinie zastępczej czy adopcyjnej.
							<br />
							<br />
							Okres, w którym dziecko zostaje zabrane ze środowiska rodzinnego i umieszczone w placówce, jest niezwykle
							stresujący. Organizując małą, rodzinną placówkę, stwarzamy lepsze warunki i możliwości, pozwalające
							przywrócić poczucie bezpieczeństwa. Indywidualny kontakt dziecka z opiekunem sprzyja wyjaśnieniu mu
							przyczyn trudnej sytuacji życiowej, a także ułatwia pracę z dzieckiem w celu zaakceptowania nowej
							rzeczywistości.
						</p>
						<img className="section__img about__item-2" src={aboutTwo} alt="" />

						<p className="section__text about__item-3">
							Obecnie w Ochronce przebywają dzieci w wieku wczesnoszkolnym i starsze.
							<br />
							<br />
							Ochronka otrzymuje na swoją działalność dofinansowanie z Miasta Poznania. Wkład własny zapewniają
							darczyńcy, firmy, fundacje i osoby indywidualne.
						</p>

						<img className="section__img about__item-4" src={aboutOne} alt="" />
					</div>
					<div className="contact__links">
						<a className="contact__link" href={dostepnosc} target="_blank">
							Deklaracja dostępności
						</a>

						<a className="contact__link" href={standardy} target="_blank">
							Standardy ochrony małoletnich
						</a>
					</div>

					<div className=" quote">
						<div className="wrapper quote__box">
							<p className="quote__text">
								Dziecko ma prawo być sobą. Ma prawo do popełniania błędów. Ma prawo do posiadania własnego zdania. Ma
								prawo do szacunku. Nie ma dzieci – są ludzie.
							</p>
							<p className="quote__author">Janusz Korczak</p>
						</div>
					</div>
				</div>
			</section>

			<section id="supportJUREK" className="section support ">
				<div className="wrapper">
					<div className="section--margin ">
						<h2 className="section__title">Pomagają nam</h2>
						<p className="section__text">
							Bez czynnego wsparcia naszych darczyńców funkcjonowanie placówki byłoby niemożliwe.
						</p>
						<p className="section__text">Pomagają nam:</p>
						<ul className="section__ul">
							<li className="section__li">Fundacja "Izba Życia"</li>
							<li className="section__li">Aluplast w Poznaniu</li>
						</ul>
					</div>
				</div>

				<div className="quote quote--img">
					<div className="quote__bg"></div>
					<div className="wrapper">
						<h3 className="quote__text quote__text--bg">Wspieraj nas na fanimani.pl </h3>

						<a className="cta" target="_blank" href="https://fanimani.pl/">
							Wspieram
						</a>
					</div>
				</div>
			</section>
			<section className="section wrapper ">
				<div className="section--margin">
					<h2 className="section__title">Przekaż 1,5%</h2>
					<p className="section__text">
						Jeśli chcesz pomóc dzieciom, którym zabrakło opieki rodzicielskiej, przekaż 1,5% podatku.
					</p>
					<p className="section__text">
						Wypełniając PIT zaznacz, na którą placówkę chcesz przekazać swój 1,5% podatku. Państwa 1,5% podatku jest
						przeznaczany przede wszystkim na bezpośrednią opiekę nad dziećmi w naszych małych domach dziecka. W imieniu
						naszych podopiecznych serdecznie Państwu dziękujemy.
					</p>
					<p className="section__text section__text--bold section__text--center">Towarzystwo Przywracania Rodziny</p>
					<p className="section__text section__text--bold section__text--center">KRS: 0000095623</p>
					<p className="section__text">
						Darmowe rozliczenie PIT możliwe jest dzięki firmie
						<span>
							{' '}
							<a className="section__link" href="https://www.pitax.pl/" target="_blank">
								PITax.pl
							</a>{' '}
						</span>
						Łatwe podatki we współpracy z
						<span>
							{' '}
							<a className="section__link" href="https://www.iwop.pl/" target="_blank">
								Instytutem Wsparcia Organizacji Pozarządowych
							</a>
						</span>
						. Program ten nie umożliwia swobodnego wyboru i przekazania 1,5% podatku dochodowego od osób fizycznych
						wybranej organizacji pożytku publicznego, program ten wskazuje TPR i jego placówki jako odbiorcę
					</p>
				</div>
			</section>

			<section id="contactJUREK" className="section section--margin contact ">
				<div className="wrapper">
					<h3 className="section__title"> Kontakt</h3>
					<div className="contact__box">
						<div className="contact__data">
							<img className="contact__icon" src={homeLogo}></img>
							<p className="contact__title">Adres</p>
							<p className="contact__text">ul. Ochota 15</p>
							<p className="contact__text">61-367 Poznań</p>
						</div>
						<div className="contact__data ">
							<img className="contact__icon" src={phoneLogo}></img>
							<p className="contact__title">Telefon</p>
							<p className="contact__text"> 061 875-06-72</p>
							<img className="contact__icon" src={emailLogo}></img>

							<p className="contact__title">E-mail</p>
							<p className="contact__text"> ochronka.jurek@tprngo.pl</p>
						</div>
						<div className="contact__data">
							<img className="contact__icon" src={noteLogo}></img>
							<p className="contact__title">Numer Konta</p>
							<p className="contact__text"> BZ WBK III/o Poznań</p>
							<p className="contact__text"> 24 1090 1362 0000 0000 3602 7296</p>
						</div>
					</div>
					<div className="contact__links contact__links--center">
						<img className="contact__icon" src={facebookLogo}></img>
						<a
							className="contact__link"
							href="https://www.facebook.com/p/Ochronka-Jurek-100072266557144/"
							target="_blank">
							Odwiedź nas na facebook!
						</a>
					</div>
				</div>
			</section>
		</>
	)
}
