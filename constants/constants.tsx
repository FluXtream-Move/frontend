import { Icon } from '@iconify/react';

import { SideNavItem } from '../types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },
  {
    title: 'Send Stream',
    path: '/projects',
    icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { 
        title: 'Single', 
        path: '/projects',
        icon: <Icon icon="lucide:send-horizontal" width="24" height="24" />, 
      },
      { title: 'Multiple', path: '/projects/web-design' },
    ],
  },
  {
    title: 'Wrap',
    path: '/messages',
    icon: <Icon icon="lucide:badge-plus" width="24" height="24" />,
  },
  {
    title: 'History',
    path: '/help',
    icon: <Icon icon="lucide:history" width="24" height="24" />,
  },
  {
    title: 'Address Book',
    path: '/help',
    icon: <Icon icon="lucide:book-open-text" width="24" height="24" />,
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
