import { MotionProps, motion } from 'framer-motion';

function LargeLogo({ fill, motionProps }: { fill: string, motionProps: MotionProps}) {
    return (
        <motion.svg 
        {...motionProps}
        viewBox="0 0 36 36"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className='absolute w-[15%]'>
            <path d="M2.5 2.5H33.5V33.5H2.5V2.5Z" stroke={fill} strokeWidth="5"/>
            <path d="M10 10H26V26L10 10Z" fill={fill}/>
            <path opacity="0.5" d="M15.5 20.5C17.5296 22.5296 16.0922 26 13.2218 26C11.4425 26 10 24.5575 10 22.7782C10 19.9078 13.4704 18.4704 15.5 20.5Z" fill={fill}/>                
        </motion.svg>
    );
}

export default LargeLogo;