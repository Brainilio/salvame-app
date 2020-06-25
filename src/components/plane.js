import React from "react"
import { TextureLoader } from "three"

//args

const Plane = (props) => {
	const image = new TextureLoader().load(props.artpiece)

	return (
		<mesh rotation={props.rot} position={props.pos} receiveShadow>
			<planeBufferGeometry attach='geometry' args={props.args} />
			<meshPhysicalMaterial attach='material' map={image} />
		</mesh>
	)
}

export default Plane
