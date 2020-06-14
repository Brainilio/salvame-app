import React from "react"

const Plane = () => (
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 40]} receiveShadow>
		<planeBufferGeometry attach='geometry' args={[20, 80, 0]} />
		<meshPhysicalMaterial attach='material' color='white' />
	</mesh>
)

export default Plane
