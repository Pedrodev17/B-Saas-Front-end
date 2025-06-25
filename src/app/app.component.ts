// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// 1. IMPORTE OS MÓDULOS DO ANGULAR MATERIAL QUE VOCÊ QUER USAR
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADICIONE OS MÓDULOS NO ARRAY DE IMPORTS
  imports: [
    RouterModule,
    RouterOutlet,
    MatCardModule,    // <-- Adicionado
    MatButtonModule,  // <-- Adicionado
    MatIconModule,     // <-- Adicionado
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bsaas-frontend'; // Esta propriedade continua aqui, sem problemas.
}
