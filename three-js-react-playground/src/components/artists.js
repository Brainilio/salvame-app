import React, { useState, useRef } from "react"
import { useSpring, a } from "react-spring/three"
import { HTML } from "drei"
import { useFrame } from "react-three-fiber"

const Artist = (props) => {
	const artist = useRef()
	// const [hovered, setHovered] = useState(false)
	// const [active] = useState(false)
	// const props = useSpring({
	// 	scale: active ? [1.5, 2, 1.5] : [1, 1, 1],
	// 	color: hovered ? "hotpink" : "gray",
	// })

	//executed in every file

	useFrame(() => {})

	return (
		<a.mesh
			ref={artist}
			rotation={props.rot}
			position={props.pos}
			// onPointerOver={() => setHovered(true)}
			// onPointerOut={() => setHovered(false)}
			// onClick={() => setActive(!active)}
			scale={props.scale}
			castShadow
		>
			<boxBufferGeometry attach='geometry' args={[5, 4, 0]} />
			<a.meshPhysicalMaterial attach='material' color={props.color} />
		</a.mesh>
	)
}

export default Artist
