import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  menuItems = [
    {
      label: 'Calendar',
      icon: 'uil-calendar-alt',
      open: false,
      subItems: ['Lorem ipsum', 'ipsum dolor', 'dolor ipsum', 'amet consectetur', 'ipsum dolor sit']
    },
    {
      label: 'Usuarios',
      icon: 'fas fa-users',
      open: false,
      subItems: []
    },
    {
      label: 'Empleados',
      icon: 'fas fa-user-tie',
      open: false,
      subItems: []
    },
    {
      label: 'Clientes',
      icon: 'fas fa-users',
      open: false,
      subItems: []
    },
    {
      label: 'Productos',
      icon: 'fas fa-cogs',
      open: false,
      subItems: []
    },
    {
      label: 'Pedidos',
      icon: 'fas fa-box',
      open: false,
      subItems: []
    },
    {
      label: 'Ventas',
      icon: 'fas fa-chart-line',
      open: false,
      subItems: []
    }
  ];

  toggleDropdown(item: any): void {
    // Close all other dropdowns
    this.menuItems.forEach(i => {
      if (i !== item) {
        i.open = false;
      }
    });

    // Toggle the clicked item
    item.open = !item.open;
  }
}
