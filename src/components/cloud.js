import React, { useRef } from "react"
import { useLoader, useFrame, useThree } from "react-three-fiber"
import { ImageLoader } from "three"

const Cloud = (props) => {
	let cloudRef = useRef()
	const { camera } = useThree();
	console.log(cloudRef.current)

	const cloud = useLoader(ImageLoader, "assets/cloud/smoke.png")
	useFrame(() => {

		if (camera.position.z > 70) {

		}

		cloudRef.current.position.x -= Math.random() * 0.05
		cloudRef.current.rotation.z -= Math.random() * 0.0001
		if (cloudRef.current.position.x < -40) {
			cloudRef.current.position.x = Math.random() * 80
			cloudRef.current.position.z = Math.random() * 30
		}
	})

	return (
		<mesh ref={cloudRef} position={props.position.map((pos) => pos)}>
			<planeBufferGeometry attach='geometry' args={[150, 90]} />
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
