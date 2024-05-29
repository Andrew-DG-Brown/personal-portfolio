import { motion, useAnimate } from 'framer-motion';
import LargeLogo from '../components/LargeLogo';

const bgTransitions = { ease: [0.22, 1, 0.36, 1], duration: 1 }

const coverScreen = 'fixed top-0 left-0 w-screen h-screen'

export const TransitionAnimation = () => {
    const [scope, animate] = useAnimate()

    const logoAnimation = async () => {
        await animate('svg', { opacity: 1, scale: 1, rotate: 20 }, { duration: 0.4, ease: 'easeOut'})
        await animate('svg', { scale: 0, rotate: 0, opacity: 0 }, { duration: 0.6, ease: 'anticipate'})
    }

    return (
        <>
            <motion.div key={'overlay-logo'} ref={scope}
            className={`${coverScreen} flex justify-center items-center z-20 pointer-events-none`}>
                <LargeLogo motionProps={{ style: { opacity: 0, scale: 0 }}} fill='#fff' />
            </motion.div>
            
            <motion.div key={'fade-in'} className={`${coverScreen} bg-black origin-bottom z-10`} 
            onAnimationStart={logoAnimation}
            initial={{ scaleY: 0}} animate={{ scaleY: 0}} exit={{ scaleY: 1}} transition={bgTransitions}/>
            <motion.div key={'fade-out'} className={`${coverScreen} bg-black origin-top z-10`} 
            initial={{ scaleY: 1}} animate={{ scaleY: 0}} exit={{ scaleY: 0}} transition={bgTransitions} />
        </>
    )
}

export default TransitionAnimation;
