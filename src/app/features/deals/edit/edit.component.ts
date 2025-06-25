import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealService } from '../../../services/deal.service';
import { Deal } from '../../../models/deal.model';

@Component({
  selector: 'app-deal-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  dealForm: FormGroup;
  dealId!: number;
  loading = true;
  notFound = false;

  constructor(
    private fb: FormBuilder,
    private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dealForm = this.fb.group({
      name: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      status: ['open', Validators.required]
    });
  }

  ngOnInit() {
    this.dealId = Number(this.route.snapshot.paramMap.get('id'));
    this.dealService.getById(this.dealId).subscribe({
      next: (deal) => {
        this.dealForm.patchValue(deal);
        this.loading = false;
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.dealForm.valid) {
      this.dealService.update(this.dealId, this.dealForm.value as Deal).subscribe({
        next: () => {
          alert('Negócio atualizado com sucesso!');
          this.router.navigate(['/deals/list']);
        },
        error: () => alert('Erro ao atualizar negócio')
      });
    }
  }
}
