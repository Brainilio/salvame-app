import React, { Suspense, useEffect } from "react"
import Box from "./components/box"
import "./styles/app.scss"
import { Canvas, useFrame } from "react-three-fiber"
import Controls from "./components/controls"
import Plane from "./components/plane"
import { Globals } from "react-spring/three"
import * as THREE from "three"
import Car from "./components/car"
import Cloud from "./components/cloud"
import ErrorBoundary from "./containers/Errorboundary"
import Light from "./components/lights"

const App = () => {
	let nodesClouds = null

	nodesClouds = new Array(40)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[Math.random() * 3, Math.random() * 2, Math.random() * 5]}
			/>
		))
	useEffect(() => {})

	return (
		<ErrorBoundary>
			<Canvas
				camera={{ position: [0, 0, 4] }}
				onCreated={({ gl }) => {
					gl.shadowMap.enabled = true
					gl.shadowMap.type = THREE.PCFSoftShadowMap
				}}
			>
				<Light />
				<fog attach='fog' args={["white", 5, 30]} />
				<Controls />
				<Suspense fallback={<>Loading...</>}>
					<group>{nodesClouds}</group>
				</Suspense>
				<Box />

				{/* <Plane /> */}
				{/* <Car /> */}
			</Canvas>
			<span>Brainilio</span>
		</ErrorBoundary>
	)
}

export default App
