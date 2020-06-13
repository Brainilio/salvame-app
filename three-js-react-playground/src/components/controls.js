import React, { useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
extend({ OrbitControls })

const Controls = () => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()

	// Function called in every frame
	useFrame(() => {
		orbitRef.current.update()
	})

	return (
		<orbitControls
			enableZoom={false}
			ref={orbitRef}
			args={[camera, gl.domElement]}
		/>
	)
}

/* maxPolarAngle={0}
			minPolarAngle={0} */

export default Controls
