import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import Fade from "react-reveal/Fade"

const Experience = () => {
	let wordToShow = [
		"Boyle Heights, Los Angeles",
		"Suffered for a long amount of time.",
		"Communities neglected for genereations",
		"But they're not alone.",
	]
	const [text, setText] = useState(0)
	const [path, setPath] = useState(false)

	let currentText = (
		<Fade left>
			<span>{wordToShow[text]}</span>
		</Fade>
	)
	let j = wordToShow.length - 1

	const nextText = () => {
		if (text !== j) {
			setText((prevState) => prevState + 1)
		} else {
			setPath(true)
		}
	}
	return (
		<div className='experience-wrapper'>
			{currentText}
			{path ? (
				<NavLink to='/painting' exact>
					<button onClick={nextText}>Next</button>
				</NavLink>
			) : (
				<button onClick={nextText}>Next</button>
			)}
		</div>
	)
}

export default Experience
