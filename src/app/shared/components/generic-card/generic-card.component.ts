import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: false,
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
  @Input() title: string = '';      // Card title
  @Input() data: number = 0;        // Display data
  @Input() progress: number = 0;    // Progress percentage (0-100)
  @Input() width: string = '250px'; // Default width
  @Input() height: string = '150px'; // Default height

}
