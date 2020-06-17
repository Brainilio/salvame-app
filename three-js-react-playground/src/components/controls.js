import React, { useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"

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

	useFrame(() => {
		if (
			camera.position.x < -10 ||
			camera.position.x > 10 ||
			camera.position.z < 5 ||
			camera.position.z > 82
		) {
			camera.position.set(0, 0, 40)
		}

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
			}
			if (keyboard[83]) {
				// S
				console.log("moving backwards")
				orbitRef.current.moveForward(-0.25)
			}
			if (keyboard[65]) {
				// A
				console.log("moving left")
				orbitRef.current.moveRight(-0.25)
			}
			if (keyboard[68]) {
				//D
				console.log("moving right")
				orbitRef.current.moveRight(0.25)
			}
		}

		camera.updateProjectionMatrix()
	})

	return <pointerLockControls ref={orbitRef} args={[camera, gl.domElement]} />
}

export default Controls
