import { iconConfig } from './icons'

export const projects = [
    {
        id: 'insightful-analytics',
        name: 'Insightful Analytics',
        description: 'A analytics dashboard utilizing a real UK consumer products dataset.',
        image: '/images/projects/insightful.jpg',
        link: 'https://insightful-analytics.vercel.app/',
        tech: [
            {
                label: 'Next.js',
                type: 'nextjs'
            },
            {
                label: 'TypeScript',
                type: 'typescript'
            },
            {
                label: 'Node.js',
                type: 'nodejs'
            },
            {
                label: 'Express.js',
                type: 'express'
            },
            {
                label: 'PostgreSQL',
                type: 'postgres'
            },
            {
                label: 'Tailwind',
                type: 'tailwind'
            },
            {
                label: 'Supabase',
                type: 'supabase'
            },
            {
                label: 'Drizzle ORM',
                type: 'drizzle'
            }
        ]
    },
    {
        id: 'commerce',
        name: 'E-commerce Store',
        description: 'An online clothing store with fully function cart and category routing',
        image: '/images/projects/commerce.png',
        link: 'https://crwnshop.netlify.app/',
        tech: []
    },
    {
        id: 'defa',
        name: 'DEFA Crypto',
        description: 'Cryptocurrency market that allows you to view price trends for the top coins.',
        image: '/images/projects/defa.jpg',
        link: 'https://www.defacrypto.com/',
        tech: []
    }
] as const

export type Project = typeof projects[0]
export type Tech = { label: string; type: keyof typeof iconConfig }

export function getProject(projectedId) {
    return projects.find(({ id }) => id == projectedId) as Project
}
