import { useNavigate, useRouterState } from '@tanstack/react-router'
import useSmoothScrollTo from './useSmoothScrollTo'
import { Link } from '../config/links'

function useNavLink() {
    const scrollToSection = useSmoothScrollTo()

    const { location } = useRouterState()
    const navigate = useNavigate()

    return (el: Link) => {

        if (location.href != '/') {
            navigate({ to: '/', state: (prev) => ({ ...prev, section: el }) })
        } else {
            scrollToSection(el.id, el.headroom)
        }
    }
}

export default useNavLink;