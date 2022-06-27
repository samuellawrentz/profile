import React from "react"
import Avataar, { Props} from "avataaars"

interface aProps extends Omit<Props, "avatarStyle"> {
    avatarStyle?: string
	align?: string
}

function Avatar({mouthType, eyeType, eyebrowType, align}: aProps) {
	return (
		<Avataar
			style={{position: 'absolute', right: align !== 'left' ? 60: undefined, left: align === 'left' ? 60: undefined, bottom: 60, width: 100, height: 100 }}
			avatarStyle='Circle'
			topType='ShortHairShortCurly'
			accessoriesType='Blank'
			hairColor='Black'
			facialHairType='BeardLight'
			facialHairColor='Black'
			clotheType='BlazerSweater'
			eyeType={eyeType || "Default"}
			eyebrowType={eyebrowType || "DefaultNatural"}
			mouthType={mouthType || "Twinkle"}
			skinColor='Light'
		/>
	)
}

export default Avatar