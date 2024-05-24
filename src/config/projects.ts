export const projects = [
    {
        id: 'insightful-analytics',
        name: 'Insightful Analytics',
        description: 'A analytics dashboard utilizing a real UK consumer products dataset.',
        image: '/images/projects/insightful.jpg',
        link: 'https://insightful-analytics.vercel.app/'
    },
    {
        id: 'commerce',
        name: 'E-commerce Store',
        description: 'An online clothing store with fully function cart and category routing',
        image: '/images/projects/commerce.png',
        link: 'https://crwnshop.netlify.app/'
    },
    {
        id: 'defa',
        name: 'DEFA Crypto',
        description: 'Cryptocurrency market that allows you to view price trends for the top coins.',
        image: '/images/projects/defa.jpg',
        link: 'https://www.defacrypto.com/'
    }
]

export type Project = typeof projects[0]

export function getProject(projectedId) {
    return projects.find(({ id }) => id == projectedId) as Project
}
