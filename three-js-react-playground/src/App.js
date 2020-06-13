import React, { Suspense } from "react"
import Box from "./components/box"
import "./styles/app.scss"
import { Canvas } from "react-three-fiber"
import Controls from "./components/controls"
import Plane from "./components/plane"
import { Globals } from "react-spring/three"
import * as THREE from "three"
import Car from "./components/car"
import Cloud from "./components/cloud"
import ErrorBoundary from "./containers/Errorboundary"
import Light from "./components/lights"

function App() {
	return (
		<ErrorBoundary>
			<Canvas
				camera={{ position: [0, 0, 5] }}
				onCreated={({ gl }) => {
					gl.shadowMap.enabled = true
					gl.shadowMap.type = THREE.PCFSoftShadowMap
				}}
			>
				<Light />
				<fog attach='fog' args={["white", 5, 30]} />
				<Controls />
				<Box />
				<Suspense fallback={<>Loading...</>}>
					<Cloud />
				</Suspense>
				{/* <Plane /> */}
				{/* <Car /> */}
			</Canvas>
			<span>Brainilio</span>
		</ErrorBoundary>
	)
}

export default App
