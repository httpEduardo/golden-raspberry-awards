import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando CommonModule
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,  // Declarando como componente standalone
  imports: [CommonModule, RouterModule],  // Importando CommonModule para *ngFor, *ngIf e RouterModule para navegação
})
export class DashboardComponent {
  // Lógica do componente
}
