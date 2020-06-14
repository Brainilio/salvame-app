import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Fade from "react-reveal/Fade"
import TextExperience from "./content/textExperience"

const Experience = () => {
	let wordToShow = [
		"Boyle Heights, Los Angeles",
		"Suffered for a long amount of time.",
		"Communities neglected for genereations",
		"But they're not alone.",
	]
	const [text, setText] = useState(0)
	// const [path, setPath] = useState(false)

	const nextText = () => {
		if (text !== j) {
			setText((prevState) => prevState + 1)
		} else {
			setText(0)
		}
	}

	let j = wordToShow.length - 1

	let words = []
	wordToShow.map((word, index) =>
		words.push(<TextExperience key={index} name={word} click={nextText} />)
	)

	console.log(words[text])

	return (
		<Fade bottom duration={5000}>
			<div className='experience-wrapper'>
				{words[text]}
				<NavLink to='/painting' exact>
					<button onClick={nextText}>Next</button>
				</NavLink>

				{/* {path ? (
			) : ( */}
				{/* <button onClick={nextText}>Next</button> */}
				{/* )} */}
			</div>
		</Fade>
	)
}

export default Experience
