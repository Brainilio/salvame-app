import React, { useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Car = () => {
	const [model, setModel] = useState()

	useEffect(() => {
		new GLTFLoader().load("assets/jet/scene.gltf", setModel)
	}, [])

	return model ? <primitive object={model.scene} /> : null
}

export default Car
