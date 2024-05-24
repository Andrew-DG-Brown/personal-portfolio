import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root';
import ProjectDetails from '../components/pages/ProjectDetails';
import { getProject } from '../config/projects';

export const projectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/$project',
    component: Project
})

function Project() {
    const { project } = projectRoute.useParams()
    const config = getProject(project)

    return (
        <ProjectDetails key={'project-' + project} project={config}/>
    )
}