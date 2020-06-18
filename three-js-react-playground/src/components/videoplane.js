import React, { useRef, useMemo } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { VideoTexture, TextureLoader, MeshLambertMaterial } from "three"
import Robert from "../assets/robert_varga.jpg"
import Test from "../assets/test.mp4"
import { HTML } from "drei"

const TexturePlane = () => {
	const image = new TextureLoader().load(Robert)
	const vid = new VideoTexture(Test)

	console.log(vid)

	// props.artpiece // module
	// props.rot // array
	// props.pos // array
	// props.args // array
	// props.artistname // string
	// props.artdescription // string
	// props.hreflink // string

	return (
		<>
			<mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 7, 60]} castShadow>
				<planeBufferGeometry attach='geometry' args={[35, 20]} />
				<meshLambertMaterial attach='material' map={image} />

				<HTML>
					<div className='artist-wrapper'>
						<span className='artist-title'>
							<strong>Robert Vargas</strong>
						</span>
						<p className='artist-description'>
							"#OurLadyOfDTLA I painted her as my dedication to #LosAngeles that
							honors this city’s unrelenting resilience. She is a microcosm of
							the world, transcending any one space or place. We will persevere
							🌎 #StayStrong #StayHealthy 💛🙏🏼💪🏼"
						</p>
						<a
							target='_blank'
							href='https://www.facebook.com/robert.vargas.140'
						>
							See more.
						</a>
					</div>
				</HTML>
			</mesh>
		</>
	)
}

export default TexturePlane
