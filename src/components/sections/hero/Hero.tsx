import { COLORS, SOCIAL_LINKS } from '../../../config/constants';
import useSmoothScrollTo from '../../../hooks/useSmoothScrollTo';
import ContactButton from './ContactButton';
import { motion } from 'framer-motion';
import Icon from '../../Icon';

export default function Hero() {
    const scrollTo = useSmoothScrollTo()

    return (
        <motion.div
            transition={{ duration: 0.5 }}
            style={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="home"
            className="relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white"
            >
            <div className="container max-w-[1320px]">
                <div className="flex flex-wrap -mx-4">
                    <div
                        className="flex flex-col justify-center w-full lg:w-5/12 px-4"
                    >
                        <div className="hero-content fadeInLeft">
                            <h1
                                className="text-dark font-bold text-6xl leading-snug mb-1"
                            >
                                Andrew Brown<br />
                            </h1>
                            <p className="text-xl mb-8 text-body-color max-w-[480px]">
                                Full Stack Software Developer
                            </p>
                            <ul className="flex flex-wrap items-center gap-5">
                                <li>
                                    <button
                                        onClick={() => scrollTo('projects')}
                                        className={`bg-primary menu-scroll py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-basehover:bg-opacity-90 font-normal rounded-lg`}
                                    >
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <ContactButton />
                                </li>
                            </ul>
                            {/* <!-- Resume and github  --> */}
                            <ul className="flex">
                                <li>
                                <a
                                    href={SOCIAL_LINKS.LINKEDIN}
                                    target="_blank"
                                    className="py-10 pr-10 lg:pr-8 xl:pr-10 inline-flex items-center justify-center text-center text-base font-normal text-body-color"
                                >
                                    <span className="flex justify-center items-center p-[0.2rem] mr-2 bg-dark text-white rounded-sm w-[1.43em]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ffffff" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/><path fill={COLORS.DARK} d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
                                    </span>
                                    LinkedIn
                                </a>
                                </li>
                                <li>
                                <a
                                    href={SOCIAL_LINKS.GITHUB}
                                    target="_blank"
                                    className="py-10 pr-10 lg:pr-8 xl:pr-10 inline-flex items-center justify-center text-center text-base font-normal text-body-color "
                                >
                                    <span className="mr-2">
                            
                                    <img src="/images/skills icons/logo-github.svg" alt="github logo" className="w-[1.43em] bg-dark rounded-full p-[0.2rem]" />
                                    </span>
                                    GitHub
                                </a>
                                </li>
                            </ul>
                        {/* <!-- My skills section  --> */}
                        <div className="ud flex flex-col clients pt-16">
                            <p
                            className="font-normal text-xl flex items-center text-body-color mb-2"
                            >
                            My Skills
                            <span
                                className="w-8 h-[2px] bg-body-color inline-block ml-2"
                            ></span>
                            </p>
                            {/* <!-- skills list  --> */}
                            <div id="skills-cont" className="flex">
                            {/* <!-- left  --> */}
                            <div className="flex flex-col flex-wrap items-center mr-10">
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='typescript' />
                                    <p className="inline ml-3">TypeScript/JavaScript</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='python' />
                                <p className="inline ml-3">Python</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='nodejs' />
                                <p className="inline ml-3">Node.js</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='aws' />
                                <p className="inline ml-3">AWS Cloud</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='postgres' />
                                <p className="inline ml-3">PostgreSQL</p>
                                </div>
                            </div>
                            
                            {/* <!-- right  --> */}
                            <div
                                className="flex flex-col flex-wrap items-center mr-10"
                            >
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='angular' />
                                <p className="inline ml-3">Angular</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='nextjs' />
                                <p className="inline ml-3">Next.js (React)</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='tailwind' />
                                <p className="inline ml-3">Tailwind</p>
                                </div>
                                <div className="flex items-center w-full py-3 mr-4">
                                    <Icon type='pandas' />
                                <p className="inline ml-3">Pandas</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="hidden lg:block lg:w-1/12 px-4"></div>
                {/* <!-- Right side  --> */}
                <div className="flex items-center w-full lg:w-6/12 px-4 wow fadeInRight">
                    <div className="flex justify-center md:justify-end lg:text-right lg:ml-auto">
                    <div
                        className="relative inline-block pt-11 lg:pt-0 w-[80%]"
                    >
                        <div className="relative max-w-full lg:ml-auto rounded-xl shadow-xl overflow-hidden bg-me"
                        style={{borderTopLeftRadius: '100px'}}>
                            <img
                            src="/images/hero/me.jpg"
                            alt="hero background"
                            />
                        </div>
                        {/* <!-- dots --> */}
                        {/* <span className="absolute top-[-5%] right-[-2rem] z-[-1]">
                        <svg
                            width="93"
                            height="93"
                            viewBox="0 0 93 93"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                        </svg>
                        </span> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}