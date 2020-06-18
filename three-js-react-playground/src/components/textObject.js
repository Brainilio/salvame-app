import React, { useMemo } from "react"
import { useLoader } from "react-three-fiber"
import * as THREE from "three"
import { DoubleSide } from "three"

const TextObject = () => {
	const font = useLoader(THREE.FontLoader, "assets/fonts/courier.json")

	console.log(font)

	const config = useMemo(
		() => ({ font, size: 10, height: 2, color: "white" }),
		[font]
	)
	return (
		<mesh position={[-35, 0, 250]}>
			<textGeometry attach='geometry' args={["Welcome.", config]} />
			<meshNormalMaterial
				attach='material'
				color={0x000000}
				side={DoubleSide}
			/>
		</mesh>
	)
}

export default TextObject
