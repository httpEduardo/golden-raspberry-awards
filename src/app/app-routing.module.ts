import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesByYearComponent } from './dashboard/movies-by-year/movies-by-year.component';
import { TopStudiosComponent } from './dashboard/top-studios/top-studios.component';
import { ProducerIntervalComponent } from './dashboard/producer-interval/producer-interval.component';
import { YearsWithMultipleWinnersComponent } from './dashboard/years-with-multiple-winners/years-with-multiple-winners.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies-by-year', component: MoviesByYearComponent },
  { path: 'top-studios', component: TopStudiosComponent },
  { path: 'producer-interval', component: ProducerIntervalComponent },
  { path: 'years-with-multiple-winners', component: YearsWithMultipleWinnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
