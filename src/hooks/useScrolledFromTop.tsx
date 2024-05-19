import { useEffect, useState } from 'react'

function useScrolledFromTop(top: number = 20, ref?: React.MutableRefObject<HTMLElement>) {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll(e: any) {
            const { scrollTop } = e.target!.scrollingElement
            const elTop = ref?.current ? ref?.current?.offsetTop + top : top

            if (scrollTop > elTop) {
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