import React, { useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Car = (props) => {
	const [model, setModel] = useState()

	useEffect(() => {
		new GLTFLoader().load(`assets/${props.name}/scene.gltf`, setModel)
	}, [])

	return model ? <primitive position={props.pos} object={model.scene} /> : null
}

export default Car
