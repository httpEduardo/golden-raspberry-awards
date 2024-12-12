import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://challenge.outsera.tech/api/movies';

  constructor(private http: HttpClient) {}

  // Obter filmes por ano
  getMoviesByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?winner=true&year=${year}`);
  }

  // Obter estúdios com mais vitórias
  getTopStudios(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=studios-with-win-count`);
  }

  // Obter intervalos de premiação para produtores
  getProducerIntervals(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=max-min-win-interval-for-producers`);
  }

  // Obter anos com múltiplos vencedores
  getYearsWithMultipleWinners(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=years-with-multiple-winners`);
  }

  // Obter todos os filmes com paginação
  getMovies(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`);
  }
}
