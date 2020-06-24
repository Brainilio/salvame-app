import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Fade from "react-reveal/Fade"
import TextExperience from "./content/textExperience"

const Experience = () => {
	let wordToShow = [
		"Boyle Heights, Los Angeles",
		"You've fought for a long time",
		"You won many battles",
		"And we have a long way to go",
		"Boyle Heights.",
		"Don't let your voice",
		"Your community",
		"Be Clouded",
		"Boyle Heights screams",
		"SALVAME",
	]
	const [text, setText] = useState(0)

	// Upon clicking the button, shift the index to the right
	const nextText = () => {
		if (text !== j) {
			setText((prevState) => prevState + 1)
		} else {
			setText(0)
		}
	}

	// the last index
	let j = wordToShow.length - 1

	// array of word/components
	let words = []

	//show words
	wordToShow.map((word, index) =>
		words.push(<TextExperience key={index} name={word} click={nextText} />)
	)

	return (
		<>
			<div onClick={nextText} className='experience-wrapper'>
				<span className='experience-text'>{words[text]}</span>
			</div>

			<NavLink
				to={{
					pathname: `/painting`,
					state: true,
				}}
				exact
			>
				<button className='next-button'>Next</button>
			</NavLink>
		</>
	)
}

export default Experience
