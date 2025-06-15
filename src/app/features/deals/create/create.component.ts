import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealService } from '../../../services/deal.service';
import { Deal } from '../../../models/deal.model';

@Component({
  selector: 'app-deal-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html'
})
export class CreateComponent {
  dealForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dealService: DealService
  ) {
    this.dealForm = this.fb.group({
      name: ['', Validators.required],
      value: [0, Validators.required],
      description: [''],
      status: ['open', Validators.required]
    });
  }

  onSubmit() {
    if (this.dealForm.valid) {
      this.dealService.create(this.dealForm.value).subscribe({
        next: (deal) => {
          alert('Negócio cadastrado com sucesso!');
          this.dealForm.reset();
        },
        error: () => alert('Erro ao cadastrar negócio')
      });
    }
  }
}
