import React, { useState, useRef } from "react"
import { useSpring, a } from "react-spring/three"
import { HTML } from "drei"
import { useFrame } from "react-three-fiber"

const Artist = (props) => {
	const artist = useRef()
	//executed in every file
	useFrame(() => {})

	return (
		<a.mesh
			ref={artist}
			rotation={props.rot}
			position={props.pos}
			scale={props.scale}
			castShadow
		>
			<boxBufferGeometry attach='geometry' args={[5, 4, 0]} />
			<a.meshPhysicalMaterial attach='material' color={props.color} />
		</a.mesh>
	)
}

export default Artist
