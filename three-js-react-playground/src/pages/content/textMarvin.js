import React from "react"
import Fade from "react-reveal/Fade"

const TextMarvin = (props) => (
	<Fade duration={3000}>
		<span onClick={props.click}>{props.name}</span>
	</Fade>
)

export default TextMarvin
