import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Experience = () => {
	let wordToShow = [
		"Boyle Heights, Los Angeles",
		"Suffered for a long amount of time.",
		"Communities neglected for genereations",
		"But they're not alone."
	]
	const [text, setText] = useState(0)
	const [path, setPath] = useState(false)

	let currentText = wordToShow[text]
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
			<span>{currentText}</span>
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
