import React from "react"


const Separator = (props) => {

    return (
        <mesh rotation={props.rot} position={props.pos} receiveShadow>
            <planeBufferGeometry attach='geometry' args={props.args} />
            <meshPhysicalMaterial attach='material' color={0x000000} />
        </mesh>
    )
}

export default Separator
