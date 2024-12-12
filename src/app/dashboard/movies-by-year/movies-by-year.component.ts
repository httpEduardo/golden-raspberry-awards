import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-by-year',
  templateUrl: './movies-by-year.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa CommonModule e FormsModule
})
export class MoviesByYearComponent {}
