import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cuisines',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cuisines.component.html',
  styleUrl: './cuisines.component.css'
})
export class CuisinesComponent {
  
}
