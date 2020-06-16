import React, { useState, Suspense, useMemo } from "react"
import Cloud from "./cloud"
import Light from "./lights"
import { Canvas } from "react-three-fiber"
import Controls from "./controls"
import Plane from "./plane"
import Obj from "./car"
import * as THREE from "three"
import Box from "./box"
import Artist from "./artists"
import Skybox from "./skybox"
import Video from "./videoplane"

const Painting = () => {
	let nodesClouds = null
	let keyboard = {}
	const [keys, setKeys] = useState({})

	// Function called in every frame

	nodesClouds = new Array(65)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[
					Math.random() * 45,
					Math.random() * 5 + 2,
					Math.floor(Math.random() * 80) - 5,
				]}
			/>
		))

	const keyUp = (event) => {
		keyboard[event.keyCode] = false
		setKeys(keyboard)
	}

	const keyDown = (event) => {
		keyboard[event.keyCode] = true
		setKeys(keyboard)
	}

	return (
		<>
			<Canvas
				onKeyDown={keyDown}
				onKeyUp={keyUp}
				perspectivecamera='true'
				camera={{ position: [0, 0, 40] }}
				onCreated={({ gl }) => {
					gl.shadowMap.enabled = true
					gl.shadowMap.type = THREE.PCFSoftShadowMap
				}}
			>
				<Light />
				<Controls keys={keys} />
				{/* <Suspense fallback={<>Loading...</>}>
					<group>{nodesClouds}</group>
				</Suspense> */}
				<Obj name='water_tower' pos={[-15, -300, 20]} />
				<Obj name='chimney' pos={[-15, -8, 20]} />
				<Obj name='barrels_and_pallet' pos={[-9, -3.5, 20]} />
				<Box />
				<Plane />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[10, 0, 30]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[10, 0, 15]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[-10, 0, 15]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[-10, 0, 30]} />
				{/* <Skybox /> */}
			</Canvas>
			{/* <Video /> */}
		</>
	)
}

export default Painting
