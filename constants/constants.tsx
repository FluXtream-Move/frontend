import { Icon } from '@iconify/react';

import { SideNavItem } from '@/types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },
  {
    title: 'Send Stream',
    path: '/dashboard/send',
    icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { 
        title: 'Single', 
        path: '/dashboard/single',
        icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />, 
      },
    ],
  },
  {
    title: 'Request Stream',
    path: '/dashboard/request-stream',
    icon: <Icon icon="lucide:receipt" width="24" height="24" />,
  },
  {
    title: 'Withdraw',
    path: '/dashboard/wrap',
    icon: <Icon icon="lucide:arrow-big-down-dash" width="24" height="24" />,
  },
  {
    title: 'History',
    path: '/dashboard/history',
    icon: <Icon icon="lucide:history" width="24" height="24" />,
  },
  {
    title: 'View Stream',
    path: '/dashboard/view',
    icon: <Icon icon="lucide:gantt-chart" width="24" height="24" />,
  },
  {
    title: 'Pay Model',
    path: '/dashboard/pay',
    icon: <Icon icon="lucide:wallet" width="24" height="24" />,
  },
];
