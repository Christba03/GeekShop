import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  menuItems = [
    {
      label: 'Calendar',
      icon: 'uil-calendar-alt',
      open: false,
      href: 'admin/calendar',  // Specific href for this item
      subItems: ['Lorem ipsum', 'ipsum dolor', 'dolor ipsum', 'amet consectetur', 'ipsum dolor sit']
    },
    {
      label: 'Usuarios',
      icon: 'fas fa-users',
      open: false,
      href: 'admin/usuarios',  // Specific href for this item
      subItems: []
    },
    // Add href for other items similarly...
  ];
}
