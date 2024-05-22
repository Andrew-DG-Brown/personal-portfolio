import Experience from './sections/Experience';
import Hero from './sections/hero/Hero';
import ScrollToTop from './ScrollToTop';
import Projects from './sections/projects/Projects';
import { useEffect } from 'react';
import useSmoothScrollTo from '../hooks/useSmoothScrollTo';

export default function Main() {
    const { state } = history
    const scrollToSection = useSmoothScrollTo()

    useEffect(() => {
        if ('section' in state) {
            scrollToSection(state.section?.id, state.section?.headroom, 'instant')
        }
    }, [])

    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            {/* <Contact /> */}
            <ScrollToTop />
        </>
    )
}