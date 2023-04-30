import Default from '../layouts/Default'

import Home from '../pages/Home'

export default [
  {
    path: '/',
    component: Default,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
      },
    ],
  },
]
