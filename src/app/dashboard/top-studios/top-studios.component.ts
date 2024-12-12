import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-top-studios',
  templateUrl: './top-studios.component.html',
  styleUrls: ['./top-studios.component.css'],
})
export class TopStudiosComponent implements OnInit {
  studios: any[] = [];
  error: string | null = null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getTopStudios().subscribe({
      next: (data) => {
        this.studios = data.studios;
      },
      error: (err) => {
        this.error = 'Failed to load data.';
        console.error(err);
      },
    });
  }
}
