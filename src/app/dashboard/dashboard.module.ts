import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf e *ngFor
import { FormsModule } from '@angular/forms'; // Necessário para [(ngModel)]

// Componentes do Dashboard
import { ProducerIntervalComponent } from './producer-interval/producer-interval.component';
import { TopStudiosComponent } from './top-studios/top-studios.component';
import { YearsWithMultipleWinnersComponent } from './years-with-multiple-winners/years-with-multiple-winners.component';
import { MoviesByYearComponent } from './movies-by-year/movies-by-year.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    ProducerIntervalComponent,
    TopStudiosComponent,
    YearsWithMultipleWinnersComponent,
    MoviesByYearComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule, // Adicionado
    FormsModule, // Adicionado
  ],
})
export class DashboardModule {}
