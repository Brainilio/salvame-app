import React, { Suspense, useEffect, useState, useRef } from "react"
import Cloud from "./cloud"
import Light from "./lights"
import { Canvas, useFrame } from "react-three-fiber"
import Controls from "./controls"
import Plane from "./plane"
import * as THREE from "three"
import Car from "./car"
import Box from "./box"

const Painting = () => {
	// let canvasRef = useRef()
	let nodesClouds = null
	nodesClouds = new Array(5)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[
					Math.random() * 3,
					Math.random() * 2,
					Math.floor(Math.random() * 10) - 5,
				]}
			/>
		))

	return (
		<>
			<Canvas
				// ref={canvasRef}
				camera={{ position: [0, 0, 40] }}
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

				<Plane />
				{/* <Car /> */}
			</Canvas>
		</>
	)
}

export default Painting
