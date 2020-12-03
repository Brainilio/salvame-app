import React from "react"

const Light = () => {
	return (
		<>
			<ambientLight intensity={0} />
			<directionalLight color={0xff8c19} position={[50, 50, 50]} />
			<pointLight color={0x406340} position={[0, 300, 500]} />
			{/* <pointLight color={0x293029} position={[0, 300, 500]} /> */}
			{/* <pointLight color={0x182918} position={[0, 300, 500]} /> */}
			<spotLight position={[0, 80, 10]} penumbra={1} castShadow />
			{/* <spotLight position={[0, 0, 700]} penumbra={1} castShadow /> */}
		</>
	)
}

export default Light
