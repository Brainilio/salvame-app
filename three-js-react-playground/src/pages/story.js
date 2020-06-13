import React from "react"
import { NavLink } from "react-router-dom"

const Story = (props) => {
	return (
		<div className='video-page-wrapper'>
			<span className='video-page-title'>SALVAME</span>
			<NavLink to='/experience' exact>
				<button>Next</button>
			</NavLink>
		</div>
	)
}

export default Story
