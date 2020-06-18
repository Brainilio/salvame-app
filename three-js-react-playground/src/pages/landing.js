import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import ReactHowler from "react-howler"
import hoverSong from "../assets/background_prologue.mp3"
import backgroundSong from "../assets/backgroundmenu.mp3"
import SongContext from "../context/context"

const Landing = () => {
	const [play, setPlay] = useState(false)
	const [backPlay, setBack] = useState(false)

	return (
		<div className='landing-wrapper'>
			<div className='landing-ad'>
				<span className='landing-ad-header'>#BlackLivesMatter</span>
				<a href='https://blacklivesmatter.com/'>Get in action!</a>
			</div>
			<span className='landing-header'>
				"Injustice anywhere is a threat to justice everywhere" - Martin Luther
				King
			</span>

			<SongContext.Provider value={{ shouldPlay: backPlay }}>
				<NavLink to='/story'>
					<button
						onMouseOver={() => {
							setPlay(true)
						}}
						onMouseOut={() => {
							setPlay(false)
						}}
						onClick={() => setBack(true)}
					>
						Start Experience
					</button>
				</NavLink>
			</SongContext.Provider>

			<ReactHowler src={hoverSong} playing={play} />
			<ReactHowler src={backgroundSong} playing={!play} />
		</div>
	)
}
export default Landing
