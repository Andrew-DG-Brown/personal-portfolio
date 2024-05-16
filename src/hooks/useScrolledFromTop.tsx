import { useEffect, useState } from 'react'

function useScrolledFromTop() {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll(e: any) {
            const { scrollTop } = e.target!.scrollingElement

            if (scrollTop > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        addEventListener('scroll', handleScroll)

        return () => removeEventListener('scroll', handleScroll)
    }, [])

    return scrolled
}

export default useScrolledFromTop;