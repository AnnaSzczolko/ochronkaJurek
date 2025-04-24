import React from 'react'

export default function Hero({title, children}) {
  return (
    <>
        <div className="hero">
				<div className="hero__bg">
					<div className="wrapper">
						<h1 className="hero__title">{title}</h1>
					</div>
				</div>
				{children}
			</div>
    </>
  )
}
