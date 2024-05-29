import { Link } from '@tanstack/react-router'
import { Variants, motion } from 'framer-motion'
import { Project } from '../../../config/projects'

const variants: Variants = {
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

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
        style={{ 
            boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.05)', 
            zIndex: 0
        }}
        layoutId={project.name}
        variants={variants}
        whileHover={'hovered'}
        className="bg-white rounded-xl overflow-hidden mx-4 mt-5">
            <ProjectLink link={`/${project.id}`} className='block'>
                <motion.img
                src={project.image}
                alt="image"
                className="w-full"
                />
            </ProjectLink>
            <motion.div className="py-8 px-6 sm:px-11">
                <h3>
                    <ProjectLink link={`/${project.id}`} className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate">
                        {project.name}
                    </ProjectLink>
                </h3>
                <p
                className="font-medium text-body-color text-base mb-4"
                >
                {project.description}
                </p>
                <div className='flex gap-10 mt-7 items-center'>
                    <ProjectLink link={`/${project.id}`} className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-primary text-white text-sm">
                        Details
                    </ProjectLink>
                    <a href={project.link} target='_blank'
                    className="font-medium text-sm text-black underline hover:text-primary hover:no-underline">
                        Demo
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

function ProjectLink({ children, link, className }: { children?: JSX.Element | string, link: string, className: string }) {
    return (
        <Link to={link} className={className}>
                {children}
        </Link>
    )
}
