import {matchRoutes, renderRoutes} from 'react-router-config'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: App,
      },
      {
        path: '/authors',
        component: Authors,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
]

export default routes
