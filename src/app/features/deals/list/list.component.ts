import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa o CommonModule para usar diretivas como ngFor, ngIf, etc.
import { DealService } from '../../../services/deal.service';
import { Deal } from '../../../models/deal.model';

@Component({
  selector: 'app-deals-list',
  standalone: true,
  imports: [CommonModule], // <-- Adicione aqui!
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  deals: Deal[] = [];

  constructor(private dealService: DealService) {}

  ngOnInit() {
    this.dealService.getAll().subscribe(data => this.deals = data);
  }

  deleteDeal(id: number) {
    this.dealService.delete(id).subscribe(() => {
      this.deals = this.deals.filter(deal => deal.id !== id);
    });
  }
}
