import React, { useRef, useMemo } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { VideoTexture, TextureLoader, MeshLambertMaterial } from "three"
import Robert from "../assets/robert_varga.jpg"
import Test from "../assets/test.mp4"

const TexturePlane = () => {
	const video = useRef()
	const image = new TextureLoader().load(Robert)
	const vid = new VideoTexture(Test)

	console.log(vid)

	return (
		<>
			<mesh
				rotation={[0, -Math.PI / 2, 0]}
				position={[10, 0, 30]}
				receiveShadow
			>
				<planeBufferGeometry attach='geometry' args={[40, 20]} />
				<meshLambertMaterial attach='material' map={image} />
			</mesh>
		</>
	)
}

export default TexturePlane
