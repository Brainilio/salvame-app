import React, { useMemo } from "react"
import { useLoader } from "react-three-fiber"
import * as THREE from "three"
import { DoubleSide } from "three"

const TextObject = (props) => {
	const font = useLoader(THREE.FontLoader, "assets/fonts/courier.json")

	const config = useMemo(
		() => ({ font, size: 10, height: 2, color: "white" }),
		[font]
	)
	return (
		<mesh position={props.pos}>
			<textGeometry attach='geometry' args={[props.text, config]} />
			<meshNormalMaterial
				attach='material'
				color={0x000000}
				side={DoubleSide}
			/>
		</mesh>
	)
}

export default TextObject
