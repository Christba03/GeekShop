import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']  // Fix to 'styleUrls' (plural)
})
export class SideBarComponent {
  @Input() href: string = '';  // Corrected the @Input decorator

  @Input() menuItems: any[] = []; // This will accept menu items from the parent component.


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
