import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  deals = [
    { title: 'Negócio A', value: 10000, stage: 'Proposta', owner: 'Pedro' },
    { title: 'Negócio B', value: 8000, stage: 'Contato Inicial', owner: 'Maria' },
    { title: 'Negócio C', value: 15000, stage: 'Fechado', owner: 'João' }
    // ...adicione mais se quiser
  ];
}
