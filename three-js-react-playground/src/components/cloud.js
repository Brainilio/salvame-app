import React, { useEffect, useState, Suspense, useRef } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { ImageLoader, MeshLambertMaterial, TextureLoader } from "three"

const Cloud = (props) => {
	let cloudRef = useRef()

	const cloud = useLoader(ImageLoader, "assets/cloud/smoke.png")

	useFrame(() => {
		cloudRef.current.position.x -= Math.random() * 0.1
		if (cloudRef.current.position.x < -10) {
			cloudRef.current.position.x = 11
		}
	})

	return (
		<mesh ref={cloudRef} position={[0, 0, -2]}>
			<planeBufferGeometry attach='geometry' args={[5, 5, 5]} />
			<meshLambertMaterial attach='material' transparent>
				<texture
					attach='map'
					image={cloud}
					onUpdate={(self) => cloud && (self.needsUpdate = true)}
				/>
			</meshLambertMaterial>
		</mesh>
	)
}

export default Cloud

// {
// 	/* <mesh position={[0, 0, -2]}>

// 			<meshLambertMaterial attach='material' transparent>
// 				<texture
// 					attach='map'
// 					image={cloud}
// 					onUpdate={(self) => cloud && (self.needsUpdate = true)}
// 				/>
// 			</meshLambertMaterial>
// 		</mesh> */
// }
