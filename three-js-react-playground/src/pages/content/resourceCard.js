import React from "react"

const Card = (props) => {
	return (
		<div className='resource-card'>
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
