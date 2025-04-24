import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'

import StatutTowarzystwaPrzywracaniaRodziny from '../pdf/StatutTowarzystwaPrzywracaniaRodziny.pdf'
import homeLogo from '../img/home.png'
import emailLogo from '../img/email.png'
import phoneLogo from '../img/phone-call.png'
import handsOnTree from '../img/handsOnTree.jpg'

import sprawozdanie2020 from '../pdf/sprawozdanie2020.pdf'
import sprawozdanie2021 from '../pdf/sprawozdanie2021.pdf'
import sprawozdanie2022 from '../pdf/sprawozdanie2022.pdf'
import sprawozdanie2023 from '../pdf/sprawozdanie2023.pdf'
import polityka from '../pdf/POLITYKA BEZPIECZENSTWA INFORMACJI.pdf'
import Navbar from '../components/Navbar'

export default function Towarzystwo() {
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

			<Hero title="Towarzystwo Przywracania Rodziny w Poznaniu">
				<Navbar></Navbar>
			</Hero>
			<section  id="aboutTPR" className="section section--margin ">
			<div className="wrapper">
				<h2 className="section__title">O nas</h2>
				<div className="tpr">
					<p className="section__text tpr__1">
						Jesteśmy organizacją pożytku publicznego. Zrzeszamy ludzi pragnących wspierać dzieci pozbawione domu
						rodzinnego. Naszą misją jest pomagać dzieciom, które doświadczyły dramatu, porzucenia lub zaniedbania
						psychicznego i fizycznego. Opiekę dzieciom organizujemy w małych bezpiecznych domach dziecka dla sześciorga
						wychowanków, zwanych ochronkami. Współpracujemy z rodziną naturalną aby dzieci mogły powrócić do domu po
						ustaniu przyczyny kryzysu. Pośredniczymy w poszukiwaniu dla naszych dzieci najlepszej nowej rodziny, jeśli
						powrót do domu jest niemożliwy. Udzielamy wszechstronnej pomocy kandydatom na rodziców dla dzieci
						oczekujących na nowy dom.
					</p>
					<img className="section__img tpr__2" src={handsOnTree} alt="" />

					<p className="section__text section__text--bold tpr__3">
						Wesprzyj nas - wpłać darowiznę: <br /> 28 1090 1359 0000 0000 3501 8513
					</p>
				</div>
			</div>
			</section>

			<section id="missionTPR" className="mission section">
				<div className="wrapper">

					<div className="section--margin">

		
	
					<h2 className="section__title section__title--white-underline">Misja i cele</h2>
					<p className="section__text">
						Towarzystwo Przywracania Rodziny obrało sobie za cel wspieranie dziecka i rodziny oraz tworzenie
						profesjonalnych, rodzinnych form pomocy dziecku i rodzinie znajdującej się w sytuacji kryzysowej.
					</p>
					<p className="section__text">Głównym celem Towarzystwa jest przeciwdziałanie osamotnieniu dziecka.</p>
					<div className="section__container">
						<div className="section__box">
							<p className="section__text">Celami szczegółowymi Towarzystwa są:</p>
							<ul>
								<li>Podejmowanie działań w zakresie opieki i wychowania dziecka.</li>
								<li>Podejmowanie zadań w zakresie edukacji społecznej i obywatelskiej.</li>
								<li>Podejmowanie działań z zakresu nauki, edukacji i oświaty.</li>
								<li>Przeciwdziałanie patologiom społecznym i wykluczeniu społecznemu.</li>
								<li>Prowadzenie działalności w zakresie ochrony i promocji zdrowia.</li>
							</ul>
						</div>
						<div className="section__box">
							<p className="section__text">Nasze cele realizujemy m.in. poprzez:</p>
							<ul>
								<li>
									Tworzenie i prowadzenie całodobowych placówek opieki nad dzieckiem oraz rodzinnych form pomocy
									dziecku.
								</li>
								<li>
									Tworzenie i prowadzenie ośrodków adopcyjno- opiekuńczych,i poradni specjalistycznych i innych ośrodków
									wspomagających dziecko i rodzinę.
								</li>
								<li>
									Prowadzenie działalności edukacyjno-szkoleniowej m. in. poprzez organizację warsztatów, szkoleń,
									konferencji oraz publikowanie materiałów w formie plakatów, broszur, gazet, książek, itp.
								</li>
								<li>Wspieranie działalności edukacyjnej dzieci i młodzieży.</li>
								<li>
									Inicjowanie, opiniowanie i wypowiadanie się w sprawach dotyczących uregulowań prawnych w zakresie
									polityki społecznej.
								</li>
								<li>
									Podejmowanie wszelkich innych działań na rzecz dziecka i rodziny w tym m.in. działań z zakresu
									profilaktyki uzależnień i przeciwdziałania przemocy.
								</li>
								<li>Prowadzenie działalności informacyjno- promocyjnej w zakresie celów statutowych TPR.</li>
							</ul>
						</div>
					</div>
					</div>
					</div>
			</section>

			<section id="historyTPR" className="section section--margin ">
				<div className="wrapper">
				<h2 className="section__title">Historia</h2>
				<p className="section__text">
					W dniu 17 stycznia 1987r. odbyło się zebranie założycielskie stowarzyszenia, na którym wybrano Tymczasowy
					Zarząd. Stowarzyszenie zostało zarejestrowane w rejestrze stowarzyszeń województwa poznańskiego dn. 27 lipca
					1987r pod nazwą Towarzystwo Pomocy Rodzinom Zastępczym (nr RST 132). Rozpoczęcie działalności zainaugurowało
					pierwsze Walne Zgromadzenie członków 5 września 1987r. w Poznaniu przy ul. Szewskiej, na którym wybrano władze
					Stowarzyszenia. W roku 1989r. zmieniono nazwę stowarzyszenia na Towarzystwo Przywracania Rodziny, która
					funkcjonuje do chwili obecnej. Wszystkie działania były inicjatywą grupy młodych ludzi(studentów i pracowników
					domów dziecka). Pierwsza siedziba stowarzyszenia znajdowała się w Poznaniu przy ul. Szewskiej, następna (od
					1989r.) przy ul. Fiołkowej, a od 1991 przy ul. Skawińskiej. Wszystkie trzy pierwsze lokale na siedziby
					stowarzyszenia były udostępniane nieodpłatnie przez członków organizacji. Od 2004r. siedziba mieści się przy
					ul. Kosińskiego w Poznaniu.
				</p>
				<div className="section__box section__box--center">
					<p className="section__text">
						W pierwszych latach swojej działalności stowarzyszenie zajmowało się głównie pomocą rodzinom zastępczym oraz
						wychowankom domów dziecka:
					</p>
					<ul>
						<li>organizowało pomoc materialną, głównie żywnościową i odzieżową, dla rodzin potrzebujących wsparcia,</li>
						<li>otaczało środowiska zastępcze oraz rodziny w kryzysie pomocą pedagogiczną i wsparciem osobistym,</li>
						<li>udzielało wsparcia dzieciom z domów dziecka tworząc dla nich środowiska osób zaprzyjaźnionych,</li>
						<li>organizowało wypoczynek dla dzieci z domów dziecka i rodzin zastępczych.</li>
					</ul>
				</div>
				<p className="section__text">
					W wyniku zbieranych doświadczeń i pozyskiwanej wiedzy, zaczęto mieć przekonanie, że należy podejmować
					działania w kierunku tworzenia strukturalnych rozwiązań pomocy dziecku osamotnionemu. W 1992r. powstała
					pierwsza terenowa jednostka TPR - Ochronka „Jurek” (rodzinno-podobna placówka całodobowego pobytu dla dzieci,
					alternatywna forma opieki w stosunku do domu dziecka). Obserwując skuteczność nowej formy pracy, w 1997r.
					utworzono kolejną placówkę tego typu - Ochronkę „Franciszek”. Nasze Ochronki zapewniają całodobową opiekę i
					wychowanie dzieciom częściowo lub całkowicie pozbawionym rodziców w warunkach zbliżonych do domu rodzinnego.
					Obie placówki realizują swoje zadania do chwili obecnej.
				</p>
				<div className="section__box section__box--center">
					<p className="section__text">Nasze Ochronki podejmujemy następujące zadania:</p>
					<ul>
						<li>zaspokajamy niezbędne codzienne potrzeby powierzonych nam dzieci,</li>
						<li>
							podejmujemy działania w celu powrotu dziecka do rodziny naturalnej, znalezienia rodziny przysposabiającej
							lub umieszczenia w rodzinnych formach opieki zastępczej,
						</li>
						<li>zapewniamy zajęcia rekompensujące brak wychowania w rodzinie i przygotowujące do życia,</li>
						<li>umożliwiamy dzieciom kształcenie, wyrównywanie opóźnień rozwojowych i szkolnych,</li>
					</ul>
				</div>
				<p className="section__text">
					W 1994r. stowarzyszenie utworzyło Chrześcijański Ośrodek Adopcyjno - Mediacyjny „Pro Familia”, który uzyskał
					status niepublicznego ośrodka adopcyjno - opiekuńczego. Ośrodek „Pro Familia” zakończył swoją działalność z
					dniem 31.12.2011r. co było spowodowane wejściem w życie Ustawy z dnia 9 czerwca 2011r. o wspieraniu rodziny i
					systemie pieczy zastępczej (Dz. U. z 2011r. Nr poz.887). Ośrodek „Pro Familia” podejmował różnorodne działania
					na rzecz rodzin naturalnych, zastępczych i adopcyjnych.
				</p>

				<div className="section__box section__box--center">
					<p className="section__text">W naszej pracy w sposób szczególny pomagaliśmy:</p>
					<ul>
						<li>
							kobietom w nieoczekiwanej ciąży (ochrona poczętego życia, pomoc w zaakceptowaniu dziecka, troska o godne
							powierzenie dziecka do adopcji),
						</li>
						<li>dzieciom zagrożonym utratą rodziny biologicznej,</li>
						<li>dzieciom będącym poza rodzina naturalną w znalezieniu rodziny zastępczej lub adopcyjnej,</li>
						<li>osobom przygotowującym się do zastępczego lub adopcyjnego rodzicielstwa,</li>
						<li>rodzinom zastępczym w prawidłowym wypełnianiu ich zadań,</li>
						<li>rodzinom adopcyjnym (jawność adopcji, prawo do zachowania tożsamości, budowanie więzi).</li>
					</ul>
				</div>
				<p className="section__text">
					Od 01.12.2007r. do 30.11.2010r. w Obornikach Wlkp. stowarzyszenie realizowało projekt „Ośrodek Wspomagania
					Dziecka i Rodziny ŚWIATEŁKO” dzięki wsparciu udzielonemu przez Islandię, Liechtenstein i Norwegię poprzez
					dofinansowanie ze środków Mechanizmu Finansowego Europejskiego Obszaru Gospodarczego oraz Norweskiego
					Mechanizmu Finansowego, a także ze środków budżetu Rzeczpospolitej Polskiej w ramach Funduszu dla Organizacji
					Pozarządowych. Na realizację zadań otrzymano również dofinansowanie z Fundacji BRE Banku oraz pomoc finansową
					od darczyńców prywatnych i firm w wysokości ponad 10% całości kosztów zadania.
				</p>
				<div className="section__box section__box--center">
					<p className="section__text">W ramach projektu:</p>
					<ul>
						<li>
							udzielaliśmy wsparcia dzieciom i młodzieży zagrożonej demoralizacją oraz ich rodzinom poprzez: (pomoc
							psychologiczno – pedagogiczną dla dzieci i młodzieży zagrożoną demoralizacją i ich rodziców, terapię
							systemową rodzin, mediacje rodzinne, prowadzenie zajęć, terapeutycznych dla dzieci i młodzieży),
						</li>
						<li>prowadziliśmy edukację społeczną w zakresie macierzyństwa, opieki nad dzieckiem i wychowania,</li>
						<li>
							udzielaliśmy wsparcia rodzinom podejmującym zadania opieki zastępczej (m.in. prowadzono grupy wsparcia dla
							rodziców, grupy terapeutyczne dla dzieci i świadczono pomoc psychologiczno – pedagogiczną),
						</li>
						<li>promowaliśmy rodzinną opiekę zastępczą,</li>
						<li>podnosiliśmy również kwalifikacje pracowników.</li>
					</ul>
				</div>
				<p className="section__text">
					Od 01.01.2011r. do 31.05.2011r. kontynuowaliśmy w Ośrodku ŚWIATEŁKO realizację zadania w zakresie pomocy
					społecznej polegającego na wyrównywaniu szans rodzin zagrożonych niedostosowaniem społecznym poprzez
					udzielanie specjalistycznej pomocy psychologiczno- pedagogicznej dzieciom i rodzinom, w tym zastępczym dzięki
					dofinansowaniu przez Starostwo Powiatowe w Obornikach. Od 01.07.2011r. działalności Ośrodka ŚWIATEŁKO w
					Obornikach została zawieszona ze względu na brak środków na kontynuację zadania publicznego na rzecz dzieci i
					rodzin w sytuacjach kryzysowych. W dniu 01.01.2012r. została otwarta przez nasze stowarzyszenie Poradnia
					Specjalistyczna Wspierania Rodziny „Pro Familia”. Poradnia działała w Poznaniu do dnia 01.01.2016r. i byłat
					dofinansowywana przez Miasto Poznań. Świadczyła pomoc z zakresu poradnictwa specjalistycznego dla rodzin
					przeżywających trudności w wypełnianiu funkcji opiekuńczo – wychowawczych oraz dla rodzin i dzieci objętych
					systemem pieczy zastępczej. Z dniem 09 maja 2012r. rozpoczął swoją działalność Chrześcijański Ośrodek
					Adopcyjny „Pro Familia”, który wykorzystuje doświadczenie i wiedzę kilkunastoletniej działalności Ośrodka „Pro
					Familia” zamkniętego 31.12.2011r. Nasze stowarzyszenie od początku swojej działalności podejmowało zadania
					mające na celu pomoc osamotnionemu dziecku i rodzinie przeżywającej kryzys. Dzięki zdobywanemu doświadczeniu i
					wiedzy ciągle rozwijamy formy naszej działalności i dostosowujemy je do potrzeb dziecka i aktualnej sytuacji
					społecznej.
				</p>
				</div>
			</section>

			<section id="documentsTPR" className="section  links">
				<div className="wrapper ">
					<div className="section--margin">
					<h2 className="section__title section__title--white-underline">Dokumenty</h2>

					<div className="links__box">
						<p className="section__title section__title--links">Statut</p>
						<p>
							<a target="_blank" href={StatutTowarzystwaPrzywracaniaRodziny}>
								Statut Towarzystwa Przywracania Rodziny
							</a>
						</p>
					</div>
					<div className="links__box">
						<p className="section__title section__title--links">Polityka Bezpieczeństwa Informacji</p>
						<p>
							<a target="_blank" href={polityka}>
								Polityka Bezpieczeństwa Informacji
							</a>
						</p>
					</div>
					<div className="links__box">
						<p className="section__title section__title--links">Sprawozdania</p>
						<p className="section__text">
							Sprawozdania finansowe i merytoryczne można znaleźć na stronie : www.pozytek.gov.pl, wpisując nazwę
							Towarzystwa Przywracania Rodziny i KRS 0000095623.
						</p>
						<p>
							<a href={sprawozdanie2020} target="_blank">
								Sprawozdanie finansowe za rok 2020
							</a>
						</p>
						<p>
							<a href={sprawozdanie2021} target="_blank">
								Sprawozdanie finansowe za rok 2021
							</a>
						</p>
						<p>
							<a href={sprawozdanie2022} target="_blank">
								Sprawozdanie finansowe za rok 2022
							</a>
						</p>
						<p>
							<a href={sprawozdanie2023} target="_blank">
								Sprawozdanie finansowe za rok 2023
							</a>
						</p>
					</div>
				</div>
				</div>
			</section>

			<section id="contactTPR" className="section section--margin  contact ">
				<div className="wrapper">
				<h3 className="section__title"> Kontakt</h3>
				<div className="tpr__box">
					<img className="contact__icon" src={homeLogo}></img>
					<p className="contact__title">Adres</p>
					<p className="contact__text">ul. Ochota 15</p>
					<p className="contact__text">61-367 Poznań</p>
					<img className="contact__icon" src={phoneLogo}></img>
					<p className="contact__title">Telefon</p>
					<p className="contact__text"> 061 875-06-72</p>
					<img className="contact__icon" src={emailLogo}></img>

					<p className="contact__title">E-mail</p>
					<p className="contact__text"> biuro@tprngo.pl</p>
				</div>
				</div>
			</section>
			
		</>
	)
}
