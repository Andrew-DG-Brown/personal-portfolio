import Experience from './sections/Experience';
import Hero from './sections/hero/Hero';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import ScrollToTop from './ScrollToTop';
import Projects from './sections/projects/Projects';
import PreLoad from './PreLoad';
import { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

export default function Main() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [scope, animate] = useAnimate()

    function animatePage() {
        setLoaded(true)
        animate(scope.current, { opacity: 1, y: 0 }, { ease: 'easeOut', duration: 0.5 })
    }

    return (
        <>
            {!loaded ? <PreLoad onComplete={animatePage}/> : null}
            <motion.div initial={{ opacity: 0, y: 20 }} ref={scope}>
            {loaded ? (
                <>
                    <Navbar />
                    <Hero />
                    <Experience />
                    <Projects />
                    {/* <Contact /> */}
                    <Footer />
                    <ScrollToTop />
                </>
            ) : null}
            </motion.div>
            
        </>
    )
}