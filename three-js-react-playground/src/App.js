import React from "react"
import Box from "./components/box"
import "./styles/app.scss"
import { Canvas } from "react-three-fiber"

function App() {
	return (
		<Canvas>
			<Box />
		</Canvas>
	)
}

export default App
