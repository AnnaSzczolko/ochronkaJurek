import React from 'react'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className="footer">
			<p>Ochronka Jurek w Poznaniu {year} </p>
			<p>
				Projekt i wdrożenie strony{' '}
				<a className="footer__link" href="https://github.com/AnnaSzczolko" target="_blank">
					Anna Szczołko
				</a>
			</p>
		</div>
	)
}
