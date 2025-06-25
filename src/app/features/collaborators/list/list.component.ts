import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  collaborators = [
    { name: 'Gabriel Torres', email: 'gabriel@email.com', role: 'Desenvolvedor' },
    { name: 'Larissa Lima', email: 'larissa@email.com', role: 'Designer' },
    { name: 'Carlos Rocha', email: 'carlos@email.com', role: 'Analista' },
    { name: 'Fernanda Souza', email: 'fernanda@email.com', role: 'Gerente' },
    { name: 'Rafael Dias', email: 'rafael@email.com', role: 'Suporte' },
    { name: 'Juliana Costa', email: 'juliana@email.com', role: 'QA' }
    // ...adicione mais colaboradores!
  ];

  pageSize = 5;
  pagedCollaborators = this.collaborators.slice(0, this.pageSize);

  onPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    const end = start + event.pageSize;
    this.pagedCollaborators = this.collaborators.slice(start, end);
  }
}
