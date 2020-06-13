import React from "react"
import Box from "./components/box"
import "./styles/app.scss"
import { Canvas } from "react-three-fiber"
import Controls from "./components/controls"
import Plane from "./components/plane"
import { Globals } from "react-spring/three"
import * as THREE from "three"
import Car from "./components/car"

function App() {
	return (
		<Canvas
			camera={{ position: [0, 0, 3] }}
			onCreated={({ gl }) => {
				gl.shadowMap.enabled = true
				gl.shadowMap.type = THREE.PCFSoftShadowMap
			}}
		>
			<ambientLight intensity={0} />
			<spotLight position={[15, 20, 5]} penumbra={2} castShadow />
			<fog attach='fog' args={["white", 5, 15]} />

			<Controls />
			<Box />
			<Plane />
			<Car />
		</Canvas>
	)
}

export default App
