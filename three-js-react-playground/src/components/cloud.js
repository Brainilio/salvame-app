import React, { useEffect, useState, Suspense, useRef } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { ImageLoader, MeshLambertMaterial, TextureLoader } from "three"

const Cloud = (props) => {
	let cloudRef = useRef()

	const cloud = useLoader(ImageLoader, "assets/cloud/smoke.png")

	useFrame(() => {
		cloudRef.current.position.x -= Math.random() * 0.03
		if (cloudRef.current.position.x < -10) {
			cloudRef.current.position.x = 11
			cloudRef.current.position.z = Math.random() * 5
		}
	})

	return (
		<mesh ref={cloudRef} position={props.position.map((pos) => pos)}>
			<planeBufferGeometry attach='geometry' args={[2, 2, 2]} />
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
