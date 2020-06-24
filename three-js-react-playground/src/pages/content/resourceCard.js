import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Card = (props) => {
	let card = useRef(null)

	useEffect(() => {
		gsap.from(card, 1.2, { opacity: 0, y: 500 })
	})

	return (
		<div ref={(el) => (card = el)} className='resource-card'>
			<img src={props.imgsource} />
			<div className='resource-title'>
				<h1>{props.title}</h1>
				<span>{props.description}</span>
			</div>
			<a href={props.hreflink}>Visit now</a>
		</div>
	)
}

export default Card
