import React from "react"
import { Fade } from "react-reveal"

const ShowText = (props) => {
	return (
		<>
			<Fade duration={5000}>
				<div className='sit-text'>
					<span>{props.title}</span>
					<p>{props.paragraph}</p>
				</div>
				<img className='sit-vid' src={props.img} />
			</Fade>
		</>
	)
}

export default ShowText
