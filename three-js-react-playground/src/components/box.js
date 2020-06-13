import React, { useRef, useState } from "react"
import { useFrame } from "react-three-fiber"

const Box = (props) => {
	const [hovered, setHovered] = useState(false)
	const [active, setActive] = useState(false)

	return (
		<mesh
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onClick={() => setActive(!active)}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
		>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshBasicMaterial
				attach='material'
				color={hovered ? "hotpink" : "gray"}
			/>
		</mesh>
	)
}

export default Box
