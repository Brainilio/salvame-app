import React from "react"
import Fade from "react-reveal/Fade"

const TextExperience = (props) => (
	<Fade top duration={3000}>
		<span onClick={props.click}>{props.name}</span>
	</Fade>
)

export default TextExperience
