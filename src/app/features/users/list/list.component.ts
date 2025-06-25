import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users = [
    { name: 'Pedro Alves', email: 'pedro@email.com' },
    { name: 'Ana Costa', email: 'ana@email.com' },
    { name: 'Ricardo Lima', email: 'ricardo@email.com' },
    { name: 'Marina Silva', email: 'marina@email.com' },
    { name: 'Lucas Rocha', email: 'lucas@email.com' },
    { name: 'Paula Souza', email: 'paula@email.com' },
    { name: 'João Mendes', email: 'joao@email.com' },
    { name: 'Renata Dias', email: 'renata@email.com' },
    { name: 'Carlos Pinto', email: 'carlos@email.com' },
    { name: 'Bianca Prado', email: 'bianca@email.com' },
    // ...adicione mais usuários para testar
  ];

  pageSize = 5;
  pagedUsers = this.users.slice(0, this.pageSize);

  onPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    const end = start + event.pageSize;
    this.pagedUsers = this.users.slice(start, end);
  }
}
