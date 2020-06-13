import React, { useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Car = () => {
	const loader = new GLTFLoader()

	const [model, setModel] = useState()
	useEffect(() => {
		loader.load("../../public/assets/car/scene.gltf", setModel)
	})
	console.log(model)
	return model ? <primitive object={model} /> : null
}

export default Car
