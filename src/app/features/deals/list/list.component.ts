import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deals-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class DealsListComponent {
  deals = [
    { title: 'Negócio A', value: 10000, stage: 'Proposta', owner: 'Pedro' },
    { title: 'Negócio B', value: 8000, stage: 'Contato Inicial', owner: 'Maria' },
    // ...adicione mais negócios
  ];
}
