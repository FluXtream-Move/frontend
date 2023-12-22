import { Icon } from '@iconify/react';

import { SideNavItem } from '../types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },
  {
    title: 'Send Stream',
    path: '/send',
    icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { 
        title: 'Single', 
        path: '/single',
        icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />, 
      },
    ],
  },
  {
    title: 'Request Stream',
    path: '/request-stream',
    icon: <Icon icon="lucide:receipt" width="24" height="24" />,
  },
  {
    title: 'Withdraw',
    path: '/wrap',
    icon: <Icon icon="lucide:arrow-big-down-dash" width="24" height="24" />,
  },
  {
    title: 'History',
    path: '/history',
    icon: <Icon icon="lucide:history" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
         title: 'Account', 
         path: '/settings/account',
      },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
];
