import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.scss'
})
export class CoachesComponent {

  coachesInfo = [
    {src: '../assets/img/coaches/leighton.jpg', name: 'Leighton "M" Meredith', title: 'Coach', alt: 'm-profile'},
    {src: '../assets/img/coaches/dwayne.jpg', name: 'Dwayne "Zaro" Thomas', title: 'Coach', alt: 'zaro-profile'},
    {src: '../assets/img/coaches/malcom.jpg', name: '... Malcom', title: 'Coach', alt: 'malcom-profile'},
    {src: '../assets/img/coaches/shauna.jpg', name: 'Shauna Langley', title: 'Academy Coordinator', alt: 'shauna-profile'}
  ]
}
