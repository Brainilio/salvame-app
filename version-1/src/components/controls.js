import React, { useRef, useState } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"

extend({ PointerLockControls })

const Controls = (props) => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()
	const [shouldBlock, setShouldBlock] = useState(false)
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
		// console.log(camera.position.z) 275

		if (camera.position.z > 70) {
			orbitRef.current.moveForward(0.8)
		}

		if (camera.position.z < 70) {
			setShouldBlock(true)
		}

		if (shouldBlock) {
			if (
				camera.position.x < -40 ||
				camera.position.x > 40 ||
				camera.position.z < 5 ||
				camera.position.z > 82
			) {
				camera.position.set(0, 10, 70)
			}
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
			if (keyboard[87]) {
				// w
				orbitRef.current.moveForward(0.5)
				// console.log("moving forwards")
			}
			if (keyboard[83]) {
				// S
				// console.log("moving backwards")
				orbitRef.current.moveForward(-0.5)
			}
			if (keyboard[65]) {
				// A
				// console.log("moving left")
				orbitRef.current.moveRight(-0.5)
			}
			if (keyboard[68]) {
				//D
				// console.log("moving right")
				orbitRef.current.moveRight(0.5)
			}
		}

		camera.updateProjectionMatrix()
	})

	return <pointerLockControls ref={orbitRef} args={[camera, gl.domElement]} />
}

export default Controls
