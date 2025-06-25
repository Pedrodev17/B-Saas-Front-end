import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DealService } from '../../../services/deal.service';
import { Deal } from '../../../models/deal.model';

@Component({
  selector: 'app-deal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  deal?: Deal;
  loading = true;
  notFound = false;

  constructor(
    private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dealService.getById(id).subscribe({
      next: (deal) => {
        this.deal = deal;
        this.loading = false;
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  voltar() {
    this.router.navigate(['/deals/list']);
  }
}
