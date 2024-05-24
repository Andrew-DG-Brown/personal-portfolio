import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root';
import ProjectDetails from '../components/pages/project-details/ProjectDetails';
import { getProject } from '../config/projects';
import content from '../../public/static/projects.content'
import ErrorPage from '../components/pages/Error';

export const projectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/$project',
    parseParams: (params) => {
        const config = getProject(params.project)
        if (!content[config?.id]) {
            throw new Error('invalid project')
        }
        return { ...params, config }
    },
    errorComponent: ErrorPage,
    component: Project
})

function Project() {
    const { project, config } = projectRoute.useParams()

    return (
        <ProjectDetails key={'project-' + project} project={config}/>
    )
}