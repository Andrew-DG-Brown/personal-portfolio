import { createRootRoute, useMatches, useMatch } from '@tanstack/react-router';
import ReactLenis, { useLenis } from 'lenis/react';
import { useState } from 'react';
import { useAnimate, motion, AnimatePresence } from 'framer-motion';
import PreLoad from '../components/PreLoad';
import { AnimatedOutlet } from '../utils/AnimatedOutlet';

function Root() {
    useLenis()

    const [loaded, setLoaded] = useState<boolean>(false)
    const [scope, animate] = useAnimate()

    const matches = useMatches();
    const match = useMatch({ strict: false });
    const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
    const nextMatch = matches[nextMatchIndex];

    function animatePage() {
        document.body.style.cursor = 'default';
        setLoaded(true)
        animate(scope.current, { opacity: 1, y: 0 }, { ease: 'easeOut', duration: 0.5 })
    }

    return (
        <ReactLenis root options={{ duration: 0.6 }}>
            {!loaded ? <PreLoad onComplete={animatePage}/> : null}
            <motion.div initial={{ opacity: 0, y: 20 }} ref={scope}>
            {loaded ? (
                <AnimatePresence mode='wait' initial={false}>
                    <AnimatedOutlet key={nextMatch.id} />
                </AnimatePresence>
            ) : null}
            </motion.div>
        </ReactLenis>
    )
}

export const rootRoute = createRootRoute({
    component: Root
})