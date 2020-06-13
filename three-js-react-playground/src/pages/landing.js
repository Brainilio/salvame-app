import React from "react"
import { NavLink } from "react-router-dom"

const Landing = () => {
	return (
		<div className='landing-wrapper'>
			<div className='landing-ad'>
				<span className='landing-ad-header'>#BlackLivesMatter</span>
				<a href='https://blacklivesmatter.com/'>Get in action!</a>
			</div>
			<span className='landing-header'>Title Project</span>
			<NavLink to='/story'>
				<button>Start Experience</button>
			</NavLink>
		</div>
	)
}
export default Landing
