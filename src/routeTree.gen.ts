/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PiechartFirstpiechartLazyImport = createFileRoute(
  '/pie_chart/first_pie_chart',
)()

// Create/Update Routes

const PiechartFirstpiechartLazyRoute = PiechartFirstpiechartLazyImport.update({
  path: '/pie_chart/first_pie_chart',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/pie_chart/first_pie_chart.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/pie_chart/first_pie_chart': {
      preLoaderRoute: typeof PiechartFirstpiechartLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([PiechartFirstpiechartLazyRoute])

/* prettier-ignore-end */