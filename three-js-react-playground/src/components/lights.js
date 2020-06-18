import React from "react"

const Light = () => {
	return (
		<>
			<ambientLight intensity={0.2} />
			<directionalLight color={0xff8c19} position={[200, 300, 500]} />
			<pointLight color={0x406340} position={[0, 300, 500]} />
			<pointLight color={0x293029} position={[0, 300, 500]} />
			<pointLight color={0x182918} position={[0, 300, 500]} />
			<spotLight position={[5, 15, 80]} penumbra={1} castShadow />
		</>
	)
}

export default Light
