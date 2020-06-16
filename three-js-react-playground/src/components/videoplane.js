import React, { useRef, useMemo } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { VideoTexture, TextureLoader } from "three"

const Video = () => {
	const video = useRef()
	const texture = useMemo(() => TextureLoader().load("assets/video/test.mp4"), [
		"assets/video/test.mp4",
	])

	return (
		<mesh>
			<planeBufferGeometry name='geometry' args={[1, 1]} />
			<meshLambertMaterial name='material' transparent>
				<primitive map='map' object={texture} />
			</meshLambertMaterial>
		</mesh>
	)
}

export default Video
