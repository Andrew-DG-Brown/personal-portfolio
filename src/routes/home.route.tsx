import Home from '../components/pages/Home'
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})