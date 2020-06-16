import React, { useRef } from "react"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import {
	CubeTextureLoader,
	CubeCamera,
	WebGLCubeRenderTarget,
	RGBFormat,
	LinearMipmapLinearFilter,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const SkyBox = () => {
	const { scene } = useThree()
	const loader = new CubeTextureLoader()
	// The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
	const texture = loader.load([
		"assets/skybox/1.jpg",
		"assets/skybox/2.jpg",
		"assets/skybox/3.jpg",
		"assets/skybox/4.jpg",
		"assets/skybox/5.jpg",
		"assets/skybox/6.jpg",
	])

	console.log(scene)
	// Set the scene background property to the resulting texture.
	scene.background = texture
	return null
}

export default SkyBox
