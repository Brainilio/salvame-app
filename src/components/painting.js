import React, { Suspense, useState, useEffect } from "react"
import Cloud from "./cloud"
import Light from "./lights"
import { Canvas } from "react-three-fiber"
import Controls from "./controls"
import Plane from "./plane"
import Obj from "./car"
import * as THREE from "three"
import Box from "./box"
import { NavLink } from "react-router-dom"
import Artist from "./artists"
import Skybox from "./skybox"
import TextObject from "./textObject"

// art
import Robert from "../assets/robert_varga.jpg"
import Resist from "../assets/resist.jpeg"
import Corrido from "../assets/corrido.jpg"
import Kobe from "../assets/Kobe.png"
import TexturePlane from "./videoplane"

// plane assets
import Floor from "../assets/wood_floor.jpg"
import Wall from "../assets/stone_wall.jpg"

const Painting = () => {
	let nodesClouds = null

	const [shouldLoad, setShouldLoad] = useState(false)

	// useEffect(() => {
	// 	setShouldLoad(true)
	// })

	nodesClouds = new Array(5)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[
					Math.random() * 20,
					Math.random() * 5 + 2,
					Math.floor(Math.random() * 80) - 5,
				]}
			/>
		))

	return (
		<>
			<div className='additional-information'>
				<span>Information</span>
				<span>The amount of clouds is based on the current AQI index</span>
				<span>Did you know..?</span>
				<span>Did you know..?</span>
			</div>

			{shouldLoad ? (
				<Canvas
					camera={{ position: [0, 8, 275] }}
					onCreated={({ gl }) => {
						gl.shadowMap.enabled = true
						gl.shadowMap.type = THREE.PCFSoftShadowMap
					}}
				>
					<Suspense fallback={<>Loading...</>}>
						<TextObject />
					</Suspense>

					<Light />
					<Controls />
					{/* <Suspense fallback={<>Loading...</>}>
					<group>{nodesClouds}</group>
				</Suspense> */}
					{/* <Obj name='water_tower' pos={[-15, -300, 20]} /> */}
					{/* <Obj name='chimney' pos={[-15, -8, 20]} /> */}
					{/* <Obj name='barrels_and_pallet' pos={[-9, -3.5, 20]} /> */}
					<Obj name='house' pos={[-230, 0, 450]} />
					{/* <Box /> */}
					<TexturePlane
						artpiece={Robert}
						pos={[-38, 45, 12]}
						rot={[0, 0, 0]}
						args={[40, 20]}
						artistname={"Robert Vargas"}
						artdescription={`"#OurLadyOfDTLA I painted her as my dedication to #LosAngeles that
							honors this city’s unrelenting resilience. She is a microcosm of
							the world, transcending any one space or place. We will persevere
							🌎 #StayStrong #StayHealthy 💛🙏🏼💪🏼"`}
						hreflink={"https://www.facebook.com/robert.vargas.140"}
					/>
					<TexturePlane
						artpiece={Resist}
						pos={[-38, 13, 12]}
						rot={[0, 0, 0]}
						args={[35, 20]}
						artistname={"Nani Chacon"}
						artdescription={`""Resist" by Nani Chacon, on S. Anderson & 1st Streets in Boyle Heights, L.A."`}
						hreflink={"https://www.instagram.com/nanibah/?hl=en"}
					/>
					<TexturePlane
						artpiece={Corrido}
						pos={[35, 15, 12]}
						rot={[0, 0, 0]}
						args={[35, 20]}
						artistname={"East Los Streetscapers"}
						artdescription={`"A corrido is a traditional, ballad-style Mexican song. In this mural, local musician Margarito Gutierrez (descendent of mariachi Vargas de Teclitlan) is playing his vurtuoso fiddle while Il Piporro plays accordian."`}
						hreflink={"https://www.facebook.com/EastLosStreetscapers/"}
					/>
					<TexturePlane
						artpiece={Kobe}
						pos={[35, 48, 12]}
						rot={[0, 0, 0]}
						args={[20, 20]}
						artistname={"Downtown Daniel"}
						artdescription={`"A picture is worth a thousand words. Rest In Peace Gianna Bryant & Kobe Bryant . Much love to the @holidaybarla for giving me the opportunity to come out & brush this moment . Mural location is 2471 Whittier Blvd
								Los Angeles . 💜💛"`}
						hreflink={"https://www.instagram.com/downtowndaniel/"}
					/>
					<Plane
						artpiece={Floor}
						rot={[-Math.PI / 2, 0, 0]}
						pos={[0, 0, 40]}
						args={[120, 80, 0]}
					/>
					<Plane
						artpiece={Wall}
						rot={[0, 0, 0]}
						pos={[0, 30, 10]}
						args={[120, 60, 0]}
					/>
				</Canvas>
			) : (
				<span>... Loading ... </span>
			)}

			<NavLink to='/resource' exact>
				{" "}
				<button className='action-button'>Take Action!</button>
			</NavLink>
		</>
	)
}

export default Painting
