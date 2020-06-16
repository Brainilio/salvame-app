import React, { useRef } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { ImageLoader } from "three"

const Cloud = (props) => {
	let cloudRef = useRef()
	const cloud = useLoader(ImageLoader, "assets/cloud/smoke.png")
	useFrame(() => {
		// cloudRef.current.rotation.z -= 0.001
		// cloudRef.current.position.x -= Math.random() * 0.05
		// if (cloudRef.current.position.x < -20) {
		// 	cloudRef.current.position.x = Math.random() * 10 - 8
		// 	cloudRef.current.position.z = Math.random() * 30 - 3
		// }
	})

	return (
		<mesh ref={cloudRef} position={props.position.map((pos) => pos)}>
			<planeBufferGeometry attach='geometry' args={[20, 20, 20]} />
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
