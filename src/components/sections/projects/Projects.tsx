import ProjectCard from './ProjectCard';
import { projects } from '../../../config/projects';
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <section id="projects" className="pt-[120px] pb-20 bg-[#f8f9ff]">
        <div className="container">
            <div className="flex flex-wrap mx-[-16px]">
                <div className="w-full px-4">
                    <div className="max-w-[600px] mx-auto text-center mb-[50px]">
                        <span className="font-semibold text-lg text-primary block mb-2">
                            PROJECTS
                        </span>
                        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
                            My Latest Projects
                        </h2>
                        <p className="font-medium text-lg text-body-color">
                            A collection of some of my hobby project applications.
                        </p>
                    </div>
                </div>
            </div>
            <motion.div className="relative flex w-full flex-wrap -mx-4 -mt-5 min-h-[500px]">
                {projects.map((proj, i) => { 
                    return  (
                        <motion.div className="lg:w-1/2 xl:w-1/3" key={`${i}_${proj.name}`} transition={{ delay: Math.max(0, i * 0.3), duration: 0.5}} style={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
                            <ProjectCard project={proj} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
        </section>
    );
}