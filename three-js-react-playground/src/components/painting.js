import React, { Suspense } from "react"
import Cloud from "./cloud"
import Light from "./lights"
import { Canvas, useThree, useFrame } from "react-three-fiber"
import Controls from "./controls"
import Plane from "./plane"
import Obj from "./car"
import * as THREE from "three"
// import Car from "./car"
import Box from "./box"
import Artist from "./artists"

const Painting = () => {
	let nodesClouds = null

	nodesClouds = new Array(5)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[
					Math.random() * 30,
					Math.random() * 2,
					Math.floor(Math.random() * 45) - 5,
				]}
			/>
		))

	return (
		<>
			<Canvas
				perspectivecamera='true'
				camera={{ position: [0, 0, 40] }}
				onCreated={({ gl }) => {
					gl.shadowMap.enabled = true
					gl.shadowMap.type = THREE.PCFSoftShadowMap
				}}
			>
				<Light />
				{/* <fog attach='fog' args={["white", 5, 30]} /> */}
				<Controls />
				<Suspense fallback={<>Loading...</>}>
					<group>{nodesClouds}</group>
				</Suspense>
				<Obj name='water_tower' pos={[-15, -300, 20]} />
				<Obj name='chimney' pos={[-15, -8, 20]} />
				<Obj name='barrels_and_pallet' pos={[-9, -3.5, 20]} />
				<Box />
				<Plane />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[10, 0, 30]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[10, 0, 15]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[-10, 0, 15]} />
				<Artist rot={[0, Math.PI / 2, 0]} pos={[-10, 0, 30]} />
				{/* <Car /> */}
			</Canvas>
		</>
	)
}

export default Painting
