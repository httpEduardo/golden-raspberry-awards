import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  error: string | null = null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.movies = data.content; // Certifique-se que o endpoint retorna um array em `content`
      },
      (err: any) => {
        this.error = 'Failed to load movies.';
        console.error(err);
      }
    );
  }
}
