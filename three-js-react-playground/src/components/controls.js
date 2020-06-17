import React, { useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls"
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"

extend({ OrbitControls })
extend({ FirstPersonControls })
extend({ PointerLockControls })

const Controls = (props) => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()
	let keyboard = {}

	const keyDown = (event) => {
		keyboard[event.keyCode] = true
	}

	const keyUp = (event) => {
		keyboard[event.keyCode] = false
	}

	document.body.addEventListener("keydown", keyDown)
	document.body.addEventListener("keyup", keyUp)

	console.log(props.keys)
	// Function called in every frame
	useFrame(() => {
		// orbitRef.current.moveForward(0.25)
		// if (
		// 	camera.position.x < -10 ||
		// 	camera.position.x > 10 ||
		// 	camera.position.z < 5 ||
		// 	camera.position.z > 82
		// ) {
		// 	camera.position.set(0, 0, 40)
		// }

		document.body.addEventListener("keydown", (e) => {
			if (e.keyCode === 80) {
				orbitRef.current.lock()
			}
		})
		document.body.addEventListener("keydown", (e) => {
			if (e.keyCode === 79) {
				orbitRef.current.unlock()
			}
		})

		if (orbitRef.current.isLocked == true) {
			console.log("i'm locked")
			if (keyboard[87]) {
				// w
				orbitRef.current.moveForward(0.25)
				console.log("moving forwards")
				// camera.position.x += 0.25
				// camera.position.z += -Math.cos(camera.rotation.y) * 0.1
			}
			if (keyboard[83]) {
				// S
				console.log("moving backwards")
				orbitRef.current.moveForward(-0.25)
				// camera.position.x -= Math.sin(camera.rotation.y) * 0.1
				// camera.position.z -= -Math.cos(camera.rotation.y) * 0.1
			}
			if (keyboard[65]) {
				// A
				console.log("moving left")
				orbitRef.current.moveRight(-0.25)
				// camera.position.x -= Math.sin(camera.rotation.y + Math.PI / 2) * 0.1
				// camera.position.z += 0
			}
			if (keyboard[68]) {
				//D
				console.log("moving right")
				orbitRef.current.moveRight(0.25)
				// camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * 0.1
				// camera.position.z += 0
			}
		}

		// orbitRef.current.update()

		camera.updateProjectionMatrix()
	})

	return (
		<pointerLockControls
			// enableZoom={true}
			// enableRotate={true}

			ref={orbitRef}
			args={[camera, gl.domElement]}
			// enablePan={true}
			// zoomSpeed={1}
			// maxZoom={9}
			// minZoom={9}
			// maxPolarAngle={0}
			// minPolarAngle={0}
		/>
	)
}

export default Controls
