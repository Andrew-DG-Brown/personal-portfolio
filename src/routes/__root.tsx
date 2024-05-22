import { createRootRoute, useMatches, useMatch } from '@tanstack/react-router';
import ReactLenis, { useLenis } from 'lenis/react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoad from '../components/PreLoad';
import { AnimatedOutlet } from '../utils/AnimatedOutlet';

function Root() {
    useLenis()

    const [loaded, setLoaded] = useState<boolean>(false)

    const matches = useMatches();
    const match = useMatch({ strict: false });
    const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
    const nextMatch = matches[nextMatchIndex];

    function finishLoading() {
        document.body.style.cursor = 'default';
        setLoaded(true)
    }

    return (
        <ReactLenis root options={{ duration: 0.6 }}>
            {!loaded ? <PreLoad onComplete={finishLoading}/> : null}
            {loaded ? (
                <AnimatePresence mode='wait' initial={false}>
                    <AnimatedOutlet key={nextMatch.id} />
                </AnimatePresence>
            ) : null}
        </ReactLenis>
    )
}

export const rootRoute = createRootRoute({
    component: Root
})