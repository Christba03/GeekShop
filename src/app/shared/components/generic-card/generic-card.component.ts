import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: false,
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent implements OnInit {
  @Input() title: string = '';      // Card title
  @Input() data: number = 0;        // Display data
  @Input() progress: number = 0;    // Progress percentage (0-100)
  @Input() width: string = '250px'; // Default width
  @Input() height: string = '150px'; // Default height

  backgroundColor: string = ''; // ✅ Declare the property here

  private colors: string[] = ['#cce0d4', '#ECF5F0', '#B5DADE', '#FFF8C1', '#FACDAE'];

  ngOnInit() {
    this.backgroundColor = this.getRandomColor(); // ✅ Assign a random color on init
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
