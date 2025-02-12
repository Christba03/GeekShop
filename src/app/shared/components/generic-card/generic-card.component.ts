import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: false,
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'] // Cambié styleUrl a styleUrls porque es lo correcto
})
export class GenericCardComponent implements OnInit {
  @Input() title: string = '';      // Card title
  @Input() data: number = 0;        // Display data
  @Input() progress: number = 0;    // Progress percentage (0-100)
  @Input() width: string = '250px'; // Default width
  @Input() height: string = '150px'; // Default height

  backgroundColor: string = ''; // Background color for the card
  avatarImageUrl: string = '';  // Avatar image URL

  private colors: string[] = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA', '#F472B6'];

  ngOnInit() {
    this.backgroundColor = this.getRandomColor(); // Assign a random background color
    this.avatarImageUrl = this.generateAvatarUrl(); // Assign a random avatar URL
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateAvatarUrl(): string {
    const randomSeed = Math.random().toString(36).substring(2, 15); // Generate a random string for the seed
    return `https://api.dicebear.com/9.x/big-smile/svg?seed=${randomSeed}&flip=true&scale=110&backgroundType=gradientLinear&backgroundColor[]`;
  }
}
