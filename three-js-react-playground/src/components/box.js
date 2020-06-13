import React, { useState } from "react"
import { useSpring, a } from "react-spring/three"
import { HTML } from "drei"

const Box = () => {
	const [hovered, setHovered] = useState(false)
	const [active, setActive] = useState(false)
	const props = useSpring({
		scale: active ? [1.5, 2, 1.5] : [1, 1, 1],
		color: hovered ? "hotpink" : "gray"
	})

	//executed in every file

	return (
		<a.mesh
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onClick={() => setActive(!active)}
			scale={props.scale}
			castShadow
		>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<a.meshPhysicalMaterial attach='material' color={props.color} />
			<HTML scaleFactor={10}>
				<div className='content'>
					Suspense <br />
					100br
				</div>
			</HTML>
			>
		</a.mesh>
	)
}

export default Box
