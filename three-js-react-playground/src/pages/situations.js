import React, { useState } from "react"
import Pahokee from "../assets/mihokee.jpg"
import Penobscot from "../assets/penobscot.jpg"
import ShowText from "./content/textSituation"
import { NavLink } from "react-router-dom"
import Flint from "../assets/flint.jpg"

const Situations = (props) => {
	const [index, setIndex] = useState(0)
	const images = [Pahokee, Penobscot, Flint]
	const titles = ["Pahokee, FL", "Penobscot, ME", "Flint, MA"]
	const paragraphs = [
		"Pahokee, a town whose population is 56% African American and 29% Hispanic, has had to confront the sugar industry, which polluted the nearby lake Okeechobee, endangering drinking water, fish safety, and property values.",
		"The Penobscot Indian Nation, located near Old Town, Maine, has inhabited the Penobscot River for thousands of years. The river has provided them with their basic needs like food, water, recreation, and a sense of spiritual well being. For the last century and a half, pollution has accumulated in the river from a number of companies dumping their production waste into the river, most notably pulp and paper companies and wastewater treatment plants. ",
		"Long before the recent crisis garnered national headlines, the city of Flint was eminently familiar with water woes. For more than a century, the Flint River, which flows through the heart of town, has served as an unofficial waste disposal site for treated and untreated refuse from the many local industries that have sprouted along its shores, from carriage and car factories to meatpacking plants and lumber and paper mills. ",
	]

	// the last index
	let j = paragraphs.length - 1

	// Upon clicking the button, shift the index to the right
	const nextText = () => {
		if (index !== j) {
			setIndex((prevState) => prevState + 1)
		} else {
			setIndex(0)
		}
	}

	let sections = []

	paragraphs.map((words, index) => {
		sections.push(
			<ShowText
				key={index}
				title={titles[index]}
				paragraph={words}
				img={images[index]}
			/>
		)
	})

	return (
		<div onClick={nextText} className='situation-wrapper'>
			{sections[index]}
			<NavLink to='/experience' exact>
				<button className='next-button'>Next</button>
			</NavLink>
		</div>
	)
}

export default Situations
