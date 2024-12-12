import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importando o RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // AppComponent sendo standalone
  imports: [RouterModule],  // Importando RouterModule para o router-outlet
})
export class AppComponent {
  title = 'golden-raspberry-awards';
}
