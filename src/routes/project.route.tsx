import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root';
import ProjectDetails from '../components/pages/ProjectDetails';

export const projectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/$project',
    component: Project
})

function Project() {
    const { project } = projectRoute.useParams()
    return (
        <>
            {/* <div>Project ID: {project}</div> */}
            <ProjectDetails key={'project-' + project}/>
        </>
    )
}