import ProjectCard from './ProjectCard';

const projects = [
    {
        name: 'Insightful Analytics',
        description: 'A analytics dashboard utilizing a real UK consumer products dataset.',
        image: '/images/projects/insightful.jpg',
        link: 'https://insightful-analytics.vercel.app/'
    },
    {
        name: 'E-commerce Store',
        description: 'An online clothing store with fully function cart and category routing',
        image: '/images/projects/commerce.png',
        link: 'https://crwnshop.netlify.app/'
    },
    {
        name: 'DEFA Crypto',
        description: 'Cryptocurrency market app that allows you to view price trends for the top coins.',
        image: '/images/projects/defa.jpg',
        link: 'https://www.defacrypto.com/'
    }
]

export type Project = typeof projects[0]

function Projects() {
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
            <div className="flex flex-wrap -mx-4 -mt-5">
                {projects.map((proj, i) => ( 
                    <ProjectCard project={proj} key={`${i}_${proj.name}`} />
                ))}
            </div>
        </div>
        </section>
    );
}

export default Projects;