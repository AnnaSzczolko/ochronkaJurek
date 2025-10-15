import React from 'react'
import house from '../img/house/house.jpg'
import house1 from '../img/house/house1.jpg'
import house2 from '../img/house/house2.jpg'
import house3 from '../img/house/house3.jpg'
import house4 from '../img/house/house4.jpg'

export default function Photos() {
	return (
		<div className="photos-grid">
			<img className="img" src={house} alt="Zdjęcie domu" />
			<img className="img" src={house1} alt="Zdjęcie domu" />
			<img className="img" src={house2} alt="Zdjęcie domu" />
			<img className="img" src={house3} alt="Zdjęcie domu" />
		</div>
	)
}
