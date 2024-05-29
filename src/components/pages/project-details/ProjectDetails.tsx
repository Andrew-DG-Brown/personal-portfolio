import { Project, Tech } from '../../../config/projects';
import content from '../../../../public/static/projects.content'
import './ProjectDetails.styles.css'
import { motion, useAnimationFrame, useInView, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Icon from '../../Icon';
import { COLORS } from '../../../config/constants';

export default function ProjectDetails({ project }: { project: Project }) {
    const data = content[project?.id]

    return ( 
        <section className="relative pt-[150px] overflow-x-hidden">
                <BlurBall classes='top-64 max-xs:top-[17rem] max-md:top-[25rem] max-sm:left-[8%] left-[13%] 2xl:left-[10vw]  5xl:left-[17vw] w-[40rem] h-[40rem] bg-primary -z-1' />
                <BlurBall classes='top-64 max-xs:top-[17rem] max-md:top-[25rem] max-sm:right-[8%] right-[13%] 2xl:right-[10vw] 5xl:right-[17vw] w-[40rem] h-[40rem] bg-primary -z-1' />
                <div className='bg-white' style={{ boxShadow: '-1px 20px 32px 25px rgba(0,0,0,0.10)'}}>
                <div className="container">
                <div className="pb-[120px] border-b border-[#E9ECF8]">
                    <HeroImage src={project.image}/>
                    <div className="flex flex-wrap justify-center mx-[-16px] max-md:mt-56 mt-96">
                        <div className="w-full lg:w-8/12 px-4">
                            <div className='mt-14'>
                                <h2 className="font-bold text-black text-3xl sm:text-4xl leading-tight sm:leading-tight mb-4">
                                    {project.name}
                                </h2>
                                <div className="flex flex-wrap items-center justify-between mb-5">
                                    <div className="flex flex-wrap items-center">
                                        <div className="flex items-center">
                                            <div className=" max-w-[40px] w-full h-[40px] rounded-full overflow-hidden">
                                            </div>
                                            <div className="w-full">
                                                <a href={project.link} target='_blank' className="bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white whitespace-nowrap">
                                                Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <TechCarousel tech={project.tech}/>
                                
                                <div className='content' dangerouslySetInnerHTML={{ __html: data }}></div>
                                <div>
                                    <div className=" rounded-sm overflow-hidden p-8 md:p-9 lg:p-8 xl:p-9 bg-primary relative">
                                    <p className="max-w-[660px] mx-auto text-center text-base text-white font-medium
                                        ">
                                        This project is live at <a className='underline' target='_blank' href={project.link}>{project.link}</a> 
                                    </p>
                                    <span className="absolute left-0 bottom-0 z-10">
                                        <svg width="182" height="160" viewBox="0 0 182 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.2" width="151.758" height="252.328"
                                            transform="matrix(0.691726 0.72216 0.72216 -0.691726 -105.499 95.7517)"
                                            fill="url(#paint0_linear_54:283)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_54:283" x1="75.879" y1="0" x2="75.879" y2="252.328"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        </svg>
                                    </span>
                                    <span className="absolute z-10 right-3 top-3">
                                        <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <circle cx="12.1319" cy="1.22711" r="1.22711" transform="rotate(90 12.1319 1.22711)"
                                            fill="white" />
                                            <circle cx="22.4396" cy="1.22711" r="1.22711" transform="rotate(90 22.4396 1.22711)"
                                            fill="white" />
                                            <circle cx="1.57886" cy="1.22711" r="1.22711" transform="rotate(90 1.57886 1.22711)"
                                            fill="white" />
                                            <circle cx="12.1319" cy="12.0254" r="1.22711" transform="rotate(90 12.1319 12.0254)"
                                            fill="white" />
                                            <circle cx="22.4396" cy="12.0254" r="1.22711" transform="rotate(90 22.4396 12.0254)"
                                            fill="white" />
                                            <circle cx="1.57886" cy="12.0254" r="1.22711" transform="rotate(90 1.57886 12.0254)"
                                            fill="white" />
                                            <circle cx="12.1319" cy="22.8243" r="1.22711" transform="rotate(90 12.1319 22.8243)"
                                            fill="white" />
                                            <circle cx="22.4396" cy="22.8243" r="1.22711" transform="rotate(90 22.4396 22.8243)"
                                            fill="white" />
                                            <circle cx="1.57886" cy="22.8243" r="1.22711" transform="rotate(90 1.57886 22.8243)"
                                            fill="white" />
                                            <circle cx="12.1319" cy="33.6229" r="1.22711" transform="rotate(90 12.1319 33.6229)"
                                            fill="white" />
                                            <circle cx="22.4396" cy="33.6229" r="1.22711" transform="rotate(90 22.4396 33.6229)"
                                            fill="white" />
                                            <circle cx="1.57886" cy="33.6229" r="1.22711" transform="rotate(90 1.57886 33.6229)"
                                            fill="white" />
                                        </g>
                                        </svg>
                                    </span>
                                    </div>
                                    {/* <div className="sm:flex items-center justify-between">
                                    <div className="mb-5">
                                        <h5 className="
                                            font-medium text-body-color text-sm mb-3
                                            ">
                                        Popular Tags :
                                        </h5>
                                        <div className="flex items-center">
                                        <a  className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                py-2
                                                px-4
                                                mr-4
                                                rounded-sm
                                                bg-primary
                                                bg-opacity-10
                                                text-body-color
                                                hover:bg-opacity-100 hover:text-white
                                                transition
                                            ">
                                            Design
                                        </a>
                                        <a  className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                py-2
                                                px-4
                                                mr-4
                                                rounded-sm
                                                bg-primary
                                                bg-opacity-10
                                                text-body-color
                                                hover:bg-opacity-100 hover:text-white
                                                transition
                                            ">
                                            Development
                                        </a>
                                        <a  className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                py-2
                                                px-4
                                                mr-4
                                                rounded-sm
                                                bg-primary
                                                bg-opacity-10
                                                text-body-color
                                                hover:bg-opacity-100 hover:text-white
                                                transition
                                            ">
                                            Info
                                        </a>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h5 className="
                                            font-medium text-body-color text-sm
                                            sm:text-right
                                            mb-3
                                            ">
                                        Share this post :
                                        </h5>
                                        <div className="flex items-center sm:justify-end">
                                        <a  className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                w-9
                                                h-9
                                                sm:ml-3
                                                rounded-sm
                                                bg-primary
                                                bg-opacity-10
                                                text-body-color
                                                hover:bg-opacity-100 hover:text-white
                                                transition
                                            ">
                                            <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                                            <path
                                                d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
                                            </svg>
                                        </a>
                                        <a  className=" inline-flex items-center justify-center w-9 h-9 ml-3 rounded-sm bg-primary bg-opacity-10 text-body-color hover:bg-opacity-100 hover:text-white transition
                                            ">
                                            <svg width="18" height="14" viewBox="0 0 18 14" className="fill-current">
                                            <path
                                                d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z" />
                                            </svg>
                                        </a>
                                        <a  className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                w-9
                                                h-9
                                                ml-3
                                                rounded-sm
                                                bg-primary
                                                bg-opacity-10
                                                text-body-color
                                                hover:bg-opacity-100 hover:text-white
                                                transition
                                            ">
                                            <svg width="9" height="18" viewBox="0 0 9 18" className="fill-current">
                                            <path
                                                d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                                            </svg>
                                        </a>
                                        </div>
                                    </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
    );
}

function BlurBall({ classes }) {
    return <motion.div transition={{ duration: 1 }}
    viewport={{ once: true }} style={{ y: 200, visibility: 'hidden' }} whileInView={{ y: 0, visibility: 'visible' }}
    id='ball' className={`absolute rounded-full filter blur-3xl ${classes}`} />
}

function HeroImage({ src }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ axis: "y", target: ref, offset: ['-10vh start', 'end start']})
    const val = useTransform(scrollYProgress, [0, 1], [0, 30])
    const Xdeg = useSpring(val, { stiffness: 500, damping: 100 })
    const transform = useMotionTemplate`perspective(600px) rotateX(${Xdeg}deg)`

    return (
        <motion.div
        ref={ref}
        style={{ transform }}
        className="absolute max-sm:-mt-[13rem] max-md:-mt-[17rem] -mt-[23rem] -ml-[45%] w-[90%] lg:-ml-[35%] lg:w-[70%] 4xl:-ml-[700px] 4xl:w-[1400px] left-1/2 rounded-xl overflow-hidden mb-10 shadow-lg -z-1 bg-white">
            <img src={src} alt="image" className="w-full h-full object-cover object-center" />
        </motion.div>
    )

}

type Props = {
    tech: readonly Tech[]
}

function TechCarousel({ tech }: Props) {
    const [chunks, setChunks] = useState<typeof tech[]>([tech])
    const x = useMotionValue(0)
    const containerRef = useRef(null)
    const firstRef = useRef(null)
    
    const containerInView = useInView(containerRef);
    const firstInView = useInView(firstRef, { root: containerRef });
    useAnimationFrame(() => {
        if (!containerInView) return
        x.set(x.get() + 0.5)
    })

    useEffect(() => {
        if (firstInView) {
            setChunks(prev => [tech, ...prev])
        }
    }, [firstInView])

    return (
        <div ref={containerRef} className='w-full relative h-14 overflow-hidden mb-10 border-b border-[#E9ECF8]'>
            <motion.ul drag='x' dragConstraints={containerRef} style={{ x, right: 0 }} className='absolute top-0 h-full flex cursor-grab'>
                {chunks.map((chunk, chunkI) => (
                    chunk?.map((logo, i) => (
                        <li ref={i == 0 && chunkI == 0 ? firstRef : null} key={`${i}_${logo.label}`} className='h-full px-7 flex gap-2 items-center'>
                            <Icon type={logo.type} mainFill={COLORS.GRAY} />
                            <p style={{ color: COLORS.GRAY }} className='whitespace-nowrap'>{logo.label}</p>
                        </li>
                    ))
                ))}
            </motion.ul>
            <div id='overlay' className='absolute top-0 h-full w-full shadow-carousel z-10 pointer-events-none'></div>
        </div>
    )
}