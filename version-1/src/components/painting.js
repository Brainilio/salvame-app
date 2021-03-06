import React, { Suspense, useState, useEffect } from "react"
import Cloud from "./cloud"
import Light from "./lights"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import Controls from "./controls"
import Plane from "./plane"
import Obj from "./car"
import * as THREE from "three"
import Box from "./box"
import { NavLink } from "react-router-dom"
import Artist from "./artists"
import Skybox from "./skybox"
import TextObject from "./textObject"
import Particles from "react-particles-js"
import Separator from "./separator";

// art
import Robert from "../assets/robert_varga.jpg"
import Resist from "../assets/resist.jpeg"
import Corrido from "../assets/corrido.jpg"
import Kobe from "../assets/Kobe.png"
import TexturePlane from "./videoplane"

// plane assets
import Floor from "../assets/wood_floor.jpg"
import Wall from "../assets/stone_wall.jpg"
import Cobble from "../assets/cobble.png"

const Painting = () => {
	let nodesClouds = null

	const { camera } = useThree()
	const [shouldLoad, setShouldLoad] = useState(false)
	const [showModal, setshowModal] = useState(false)

	// useEffect(() => {
	// 	setShouldLoad(true)
	// })

	const BringPainting = () => {
		setShouldLoad(true)
	}

	const ModalBool = () => {
		setshowModal(true)
	}

	nodesClouds = new Array(10)
		.fill(undefined)
		.map((val, idx) => (
			<Cloud
				key={idx}
				position={[
					Math.random() * 50,
					Math.random() * 40 + 10,
					Math.floor(Math.random() * 40),
				]}
			/>
		))

	return (
		<div className='painting-wrapper'>
			{shouldLoad ? (
				<>
					<Suspense fallback={<span className='loading-span'>Loading..</span>}>



						<div className='additional-information'>

							<span className='add-aqi-tip'>

							</span>
							{
								showModal ? (<div className="modal-meaning" onClick={() => setshowModal(false)}> <p>Meaning of Art</p><p>"The clouds resemble the toxic pollution in Boyle Heights, LA. The paintings display the beautiful culture of this neighborhood and the fantastic art-culture that they have. However, with pollution rising and with the ongoing issues of environmental racism, I'm afraid this culture will not be able to be preserved due to the amount of health risks that come with pollution and hazards. Boyle Heights is at risk, but we can fight! Take action now to look at various resources you can contribute to. Don't let Boyle Heights be clouded." - Brainilio  </p> </div>) : (<span onClick={ModalBool} className='add-info'>Meaning</span>)
							}
							<span className='add-aqi'>CURRENT AQI: <br /> 65 </span>
							<span className='add-dyk'>Did you know..? <br /> <p>Approximately 40% of the lakes in America are too polluted for fishing, aquatic life, or swimming. </p></span>
						</div>


						<Canvas

							pixelRatio="1"
							camera={{ position: [0, 10, 350] }}
							onCreated={({ gl }) => {
								gl.shadowMap.enabled = true
								gl.shadowMap.type = THREE.PCFSoftShadowMap
								gl.autoClear = true
							}}
						>
							<Suspense fallback={<>Loading...</>}>
								<TextObject pos={[-30, 12, 300]} text={"Welcome"} />
								<Separator pos={[-30, 0, 250]} args={[150, 100]} />
								<TextObject pos={[0, 12, 200]} text={"To"} />
								<Separator pos={[-30, 0, 150]} args={[150, 100]} />
								<TextObject pos={[-30, 12, 100]} text={"Reality"} />
								<Separator pos={[-30, 0, 90]} args={[150, 100]} />
								<TextObject pos={[-80, 80, 0]} text={"ART OF BOYLE HEIGHTS"} />
							</Suspense>

							<Light />
							<Controls />
							<Suspense fallback={<>Loading...</>}>
								<group>{nodesClouds}</group>
							</Suspense>
							{/* <Obj name='water_tower' pos={[-15, -300, 20]} /> */}
							{/* <Obj name='chimney' pos={[-15, -8, 20]} /> */}
							{/* <Obj name='barrels_and_pallet' pos={[-9, -3.5, 20]} /> */}
							{/* <Obj name='house' pos={[-230, 0, 450]} /> */}


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
							{/* <Plane
							artpiece={Cobble}
							rot={[-Math.PI / 2, 0, Math.PI / 2]}
							pos={[0, 0, 40]}
							args={[8000, 20, 0]}
						/> */}
						</Canvas>
					</Suspense>
					<NavLink to='/resource' exact>
						{" "}
						<button className='action-button' onClick={() => setShouldLoad(false)}>Take Action!</button>
					</NavLink>
				</>
			)

				: (
					<>
						<Particles />
						<button onClick={BringPainting} className='action-button enter'>
							ENTER
					</button>
					</>
				)}
		</div>
	)
}

export default Painting
