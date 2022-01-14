import { IRouterConfig } from 'ice';
import Dashboard from '@/pages/Dashboard';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
