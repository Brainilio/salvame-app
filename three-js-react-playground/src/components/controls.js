import React, { useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls"
import { MOUSE } from "three"
extend({ OrbitControls })
extend({ FirstPersonControls })

const Controls = (props) => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()

	// Function called in every frame
	useFrame(() => {
		if (
			camera.position.x < -10 ||
			camera.position.x > 10 ||
			camera.position.z < 5 ||
			camera.position.z > 82
		) {
			camera.position.set(0, 0, 40)
		}

		if (props.keys[87]) {
			// w
			camera.position.x += Math.sin(camera.rotation.y) * 0.1
			camera.position.z += -Math.cos(camera.rotation.y) * 0.1
		}
		if (props.keys[83]) {
			// S
			camera.position.x -= Math.sin(camera.rotation.y) * 0.1
			camera.position.z -= -Math.cos(camera.rotation.y) * 0.1
		}
		if (props.keys[65]) {
			// A
			camera.position.x -= Math.sin(camera.rotation.y + Math.PI / 2) * 0.1
			camera.position.z += 0
		}
		if (props.keys[68]) {
			//D
			camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * 0.1
			camera.position.z += 0
		}

		orbitRef.current.update()
		camera.updateProjectionMatrix()
	})

	return (
		<orbitControls
			enableZoom={true}
			enableRotate={true}
			ref={orbitRef}
			args={[camera, gl.domElement]}
			enablePan={false}
			zoomSpeed={0.1}
			maxZoom={9}
			minZoom={9}
			// maxPolarAngle={0}
			// minPolarAngle={0}
		/>
	)
}

export default Controls
