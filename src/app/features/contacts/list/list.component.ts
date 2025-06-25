import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatList, MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatList,
    MatListItem,
    MatIcon,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
contacts: any;

}
