import { Component } from '@angular/core';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-movies-by-year',
  templateUrl: './movies-by-year.component.html',
})
export class MoviesByYearComponent {
  year!: number;
  movies: any[] = [];
  error: string | null = null;

  constructor(private moviesService: MoviesService) {}

  searchMovies(): void {
    this.moviesService.getMoviesByYear(this.year).subscribe({
      next: (data) => {
        this.movies = data.content;
        this.error = null;
      },
      error: () => {
        this.error = 'Failed to fetch data. Please try again.';
      },
    });
  }
}
