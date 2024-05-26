import { COLORS } from '../config/constants'
import { IconProps, iconConfig } from '../config/icons'

export default function Icon({ type, mainFill = COLORS.DARK, innerFill = '#fff' }: IconProps) {
    const props = { mainFill, innerFill }
    if (type in iconConfig) {

        return iconConfig[type](props)
    } else {
        console.log(Object.keys(iconConfig), type)
    }
}