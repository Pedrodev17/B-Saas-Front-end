import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatList, MatListItem],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = [
    { name: 'João Silva', email: 'joao@email.com' },
    { name: 'Maria Souza', email: 'maria@email.com' }
  ];
}
