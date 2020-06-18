import React, { useRef, useMemo } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { VideoTexture, TextureLoader, MeshLambertMaterial } from "three"
import Robert from "../assets/robert_varga.jpg"
import Test from "../assets/test.mp4"
import { HTML } from "drei"

const TexturePlane = (props) => {
	const image = new TextureLoader().load(props.artpiece)
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
			<mesh rotation={props.rot} position={props.pos} castShadow>
				<planeBufferGeometry attach='geometry' args={props.args} />
				<meshLambertMaterial attach='material' map={image} />

				<HTML scaleFactor={50}>
					<div className='artist-wrapper'>
						<span className='artist-title'>
							<strong>{props.artistname}</strong>
						</span>
						<p className='artist-description'>{props.artdescription}</p>
						<a target='_blank' href={props.hreflink}>
							See more.
						</a>
					</div>
				</HTML>
			</mesh>
		</>
	)
}

export default TexturePlane
