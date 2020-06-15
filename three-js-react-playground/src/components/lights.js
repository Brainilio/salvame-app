import React from "react"

const Light = () => {
	return (
		<>
			<ambientLight intensity={0} color={0x555555} />
			{/* <directionalLight color={0xff8c19} position={[200, 300, 100]} /> */}
			<pointLight color={0x406340} position={[200, 300, 100]} />
			<pointLight color={0x293029} position={[100, 300, 100]} />
			<pointLight color={0x182918} position={[300, 300, 200]} />
			<spotLight position={[15, 20, 5]} penumbra={1} castShadow />
		</>
	)
}

export default Light
