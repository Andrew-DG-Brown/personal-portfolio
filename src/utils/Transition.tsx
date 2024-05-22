import { motion } from 'framer-motion';

const transition = { ease: [0.22, 1, 0.36, 1], duration: 1 }

export const TransitionAnimation = () => {
    
    return (
        <>  
            <motion.div key={'fade-in'} className='fixed top-0 left-0 w-screen h-screen bg-black origin-bottom z-50' 
            initial={{ scaleY: 0}} animate={{ scaleY: 0}} exit={{ scaleY: 1}} transition={transition}/>
            <motion.div key={'fade-out'} className='fixed top-0 left-0 w-screen h-screen bg-black origin-top z-50' 
            initial={{ scaleY: 1}} animate={{ scaleY: 0}} exit={{ scaleY: 0}} transition={transition} />
        </>
    )
}

export default TransitionAnimation;
