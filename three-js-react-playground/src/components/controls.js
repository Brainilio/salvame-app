import React, { useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
extend({ OrbitControls })

const Controls = () => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()

	function keypressed(e) {
		switch (e.keyCode) {
			case 83: // up
				camera.position.z += 0.5
				break
			case 87: // down
				camera.position.z -= 0.5
				break
		}
	}

	camera.fov = 80

	// Function called in every frame
	useFrame(() => {
		orbitRef.current.update()
		camera.updateProjectionMatrix()
	})

	return (
		<orbitControls
			onKeyDown={keypressed}
			enableZoom={false}
			ref={orbitRef}
			args={[camera, gl.domElement]}
		/>
	)
}

/* maxPolarAngle={0}
			minPolarAngle={0} */

export default Controls
