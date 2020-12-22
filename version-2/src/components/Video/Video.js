import React from "react"
import landingVideo from "../../resources/Salvamebackground.mp4"
import "./Video.scss"

const Video = () => {
	return (
		<div className="Landing-video-page-wrapper">
			<span className="video-page-title">SALVAME</span>
			<video
				className="video-container video-container-overlay"
				autoPlay="true"
				loop="true"
				muted="true"
				data-reactid=".0.1.0.0"
			>
				<source type="video/mp4" data-reactid=".0.1.0.0.0" src={landingVideo} />
			</video>
		</div>
	)
}

export default Video
