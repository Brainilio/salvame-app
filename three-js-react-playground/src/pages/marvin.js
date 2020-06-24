import React, { useState, useRef, useEffect } from "react"
import TextExperience from "./content/textExperience"
import { NavLink } from "react-router-dom"
import Marvimg from "../assets/marv.png"
import { gsap } from "gsap"

const Marvin = () => {
	const wordToShow = [
		"Woo ah, mercy mercy me Ah things ain't what they used to be, no no Where did all the blue skies go? Poison is the wind that blows from the north and south and east Woo mercy, mercy me, mercy father",
		"Marvin Gaye wrote this song right after he came back from Vietnam and saw the need of protecting the environment when he saw how polluted the air around him got.",
		"Environmental racism is the way in which minority group neighborhoods are burdened with a disproportionate number of hazards, including toxic waste facilities, garbage dumps and other sources of environmentalinjustices.",
		"Marvin’s community is not the only one that has suffered from this problem.",
	]

	const [text, setText] = useState(0)

	let marvImage = useRef(null)

	useEffect(() => {
		gsap.from(marvImage, 1.3, { opacity: 0, y: 1800 })
		return () => {
			gsap.to(marvImage, 0, { opacity: 1 })
		}
	}, marvImage)

	// the last index
	let j = wordToShow.length - 1

	// Upon clicking the text, shift the index to the right
	const wordShift = () => {
		if (text !== j) {
			setText((prevState) => prevState + 1)
		} else {
			setText(0)
		}
	}

	// array of word/components
	let words = []

	//show words
	wordToShow.map((word, index) =>
		words.push(<TextExperience key={index} name={word} click={wordShift} />)
	)

	return (
		<div className='marvin-wrapper'>
			<div className='text-marvin'>{words[text]}</div>
			<img ref={(el) => (marvImage = el)} src={Marvimg} />
			<NavLink to='/situations' exact>
				<button className='next-button'>Next</button>
			</NavLink>
		</div>
	)
}

export default Marvin
