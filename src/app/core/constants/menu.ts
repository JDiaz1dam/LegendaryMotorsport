import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/menu.svg',
          label: 'Inicio',
          route: '/dashboard',
          children: [
            { label: 'Home', route: '/dashboard/home' },
          ],
        },
        
        {
          icon: 'assets/icons/heroicons/outline/basket-svgrepo-com.svg',
          label: 'Tienda',
          route: '/dashboard',
          children: [
            { label: 'Tienda', route: '/dashboard/tienda' },
            { label: 'Carrito', route: '/dashboard/carrito' },
          ],
        },

        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
          {
            
            icon: 'assets/icons/heroicons/outline/history-svgrepo-com.svg',
            label: 'Historial',
            route: '/dashboard/historial',
          },
      ],
    },
  ];
}
