import { Project } from './Projects';
import { Variants, motion } from 'framer-motion'

const variants: Variants = {
    initial: {
        boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.05)'
    },
    hovered: {
        scale: 1.05,
        boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.3)',
        y: -10,
        transition: {
            ease: 'easeOut',
            duration: 0.17
        }
    }
}

function ProjectCard({ project }: { project: Project }) {

    return (
        <div
        className="w-full lg:w-1/2 xl:w-1/3">
            <motion.div
            // onAnimationStart={() => setHovered(prev => !prev)}
            variants={variants}
            whileHover="hovered"
            initial="initial"
            className="bg-white rounded-xl overflow-hidden mx-4 mt-5">
                <a href={project.link} target='_blank' className="block">
                    <img
                    src={project.image}
                    alt="image"
                    className="w-full"
                    />
                </a>
                <div className="py-8 px-6 sm:px-11">
                    <h3>
                        <a href={project.link} target='_blank'
                            className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate">
                            {project.name}
                        </a>
                    </h3>
                    <p
                    className="font-medium text-body-color text-base mb-4"
                    >
                    {project.description}
                    </p>
                    <a
                    href={project.link} target='_blank'
                    className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                    >
                    Demo
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectCard;
