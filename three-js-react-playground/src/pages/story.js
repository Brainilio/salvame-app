import React from "react"
import { NavLink } from "react-router-dom"
import Vid from "../assets/Salvamebackground.mp4"

const Story = (props) => {
	return (
		<div className='video-page-wrapper'>
			<span className='video-page-title'>SALVAME</span>
			<video
				className='video-container video-container-overlay'
				autoPlay='true'
				loop='true'
				muted='true'
				data-reactid='.0.1.0.0'
			>
				<source type='video/mp4' data-reactid='.0.1.0.0.0' src={Vid} />
			</video>
			<NavLink to='/marvin' exact>
				<button className='next-button'>Next</button>
			</NavLink>
		</div>
	)
}

export default Story
