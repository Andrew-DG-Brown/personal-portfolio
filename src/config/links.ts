import { EMAIL_LINK } from './constants';

export const links = [
    {
        name: 'Home',
        section: '#home',
        id: 'home'
    },
    {
        name: 'Experience',
        section: '#experience',
        id: 'experience',
        headroom: -150
    },
    {
        name: 'Projects',
        section: '#projects',
        id: 'projects'
    },
    {
        name: 'Contact',
        link: EMAIL_LINK,
        id: 'contact'
    }
]

export type Link = typeof links[0]