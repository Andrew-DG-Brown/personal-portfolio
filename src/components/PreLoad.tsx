import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import LargeLogo from './LargeLogo'

type Props = {
    onComplete: () => void
}

export default function PreLoad({ onComplete }: Props) {
    const [scope, animate] = useAnimate()

    const endAnimation = async () => {
        return Promise.all([
            animate('svg', { opacity: 0 }, { duration: 0.4, ease: 'easeInOut'}),
            animate('span', { opacity: 0}, { duration: 0.4, ease: 'easeInOut', delay: stagger(0.015, { from: 'last'})}),
            animate(scope.current, { y: '-100vh'}, { duration: 1, ease: 'circIn', delay: 0.1})
        ])
    }

    const enterAnimation = async () => {
        window.scrollTo(0, 0)
        await animate('svg', { opacity: 1, scale: 1.2, rotate: 20 }, { duration: 0.4, ease: 'easeOut'})
        await animate('svg', { scale: 1, rotate: 0 }, { duration: 0.8, ease: 'anticipate'})
        await Promise.all([
            animate('#container', { scale: 1.07 }, {duration: 1.2, ease: 'easeOut'}),
            animate('svg', { left: '-12%' }, { duration: 0.4, ease: 'easeInOut'}),
            animate('span', { y: 0 }, { duration: 0.4, ease: 'easeInOut', delay: stagger(0.015, { from: 'last'})})
        ])
        await endAnimation()
    }

    useEffect(() => {
        enterAnimation().then(onComplete)
    }, [])

    return (
        <motion.div ref={scope} className='fixed flex justify-center items-center z-20 w-screen h-screen bg-primary subpixel-antialiased'>
            <motion.div id='container' className='relative flex justify-center items-center gap-5 max-h-[20%]'>
                <LargeLogo motionProps={{ initial: {opacity: 0, scale: 0.7, left: '42.5%'} }} fill='#fff'/>
                <div className='h-fit overflow-hidden'>
                    <motion.h2
                    className='h-full ml-[5vw] text-white font-bold text-3xl sm:text-5xl md:text-6xl xl:text-8xl leading-snug tracking-tight'>
                        {'Andrew Brown'.split('').map((char, i) => {
                            const isSpace = char == ' '
                            return <motion.span key={char + i} className={`inline-block ${isSpace ? 'invisible mx-[0.7px]': ''}`} initial={{ y: 150 }}>
                                {isSpace ? 'l' : char}
                            </motion.span>
                        })}
                    </motion.h2>
                </div>
            </motion.div>
        </motion.div>
    );
}