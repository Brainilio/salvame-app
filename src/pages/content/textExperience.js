import React from "react"
import Fade from "react-reveal/Fade"
import TypeWriter from "react-typewriter"

const TextExperience = (props) => (
	<Fade duration={3000}>
		<TypeWriter typing={0.8}>
			<span onClick={props.click}>{props.name}</span>
		</TypeWriter>
	</Fade>
)

export default TextExperience
