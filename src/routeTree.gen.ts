/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PiechartPiechartwithlegendontherightLazyImport = createFileRoute(
  '/pie_chart/pie_chart_with_legend_on_the_right',
)()
const PiechartPiechartwithalwaystooltipLazyImport = createFileRoute(
  '/pie_chart/pie_chart_with_always_tooltip',
)()
const PiechartPiechartwithalwaystextLazyImport = createFileRoute(
  '/pie_chart/pie_chart_with_always_text',
)()
const PiechartFirstpiechartLazyImport = createFileRoute(
  '/pie_chart/first_pie_chart',
)()

// Create/Update Routes

const PiechartPiechartwithlegendontherightLazyRoute =
  PiechartPiechartwithlegendontherightLazyImport.update({
    path: '/pie_chart/pie_chart_with_legend_on_the_right',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/pie_chart/pie_chart_with_legend_on_the_right.lazy').then(
      (d) => d.Route,
    ),
  )

const PiechartPiechartwithalwaystooltipLazyRoute =
  PiechartPiechartwithalwaystooltipLazyImport.update({
    path: '/pie_chart/pie_chart_with_always_tooltip',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/pie_chart/pie_chart_with_always_tooltip.lazy').then(
      (d) => d.Route,
    ),
  )

const PiechartPiechartwithalwaystextLazyRoute =
  PiechartPiechartwithalwaystextLazyImport.update({
    path: '/pie_chart/pie_chart_with_always_text',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/pie_chart/pie_chart_with_always_text.lazy').then(
      (d) => d.Route,
    ),
  )

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
    '/pie_chart/pie_chart_with_always_text': {
      preLoaderRoute: typeof PiechartPiechartwithalwaystextLazyImport
      parentRoute: typeof rootRoute
    }
    '/pie_chart/pie_chart_with_always_tooltip': {
      preLoaderRoute: typeof PiechartPiechartwithalwaystooltipLazyImport
      parentRoute: typeof rootRoute
    }
    '/pie_chart/pie_chart_with_legend_on_the_right': {
      preLoaderRoute: typeof PiechartPiechartwithlegendontherightLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  PiechartFirstpiechartLazyRoute,
  PiechartPiechartwithalwaystextLazyRoute,
  PiechartPiechartwithalwaystooltipLazyRoute,
  PiechartPiechartwithlegendontherightLazyRoute,
])

/* prettier-ignore-end */
