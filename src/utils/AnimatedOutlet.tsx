import { Outlet, getRouterContext } from '@tanstack/react-router';
import { motion, useIsPresent } from 'framer-motion';
import { forwardRef, useContext, useRef } from 'react';
import { cloneDeep } from 'lodash'
import { TransitionAnimation as Transition } from './Transition';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

export const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
    const RouterContext = getRouterContext();
    const routerContext = useContext(RouterContext);
    const renderedContext = useRef(routerContext);
  
    const isPresent = useIsPresent();
  
    if (isPresent) {
      renderedContext.current = cloneDeep(routerContext);
    }
  
    return (
        <>
            <Transition />
            <motion.div ref={ref} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} onAnimationStart={() => scrollTo({ behavior: 'smooth', top: 0 })}>
                <RouterContext.Provider value={renderedContext.current}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </RouterContext.Provider>
            </motion.div>
        </>
    );
})