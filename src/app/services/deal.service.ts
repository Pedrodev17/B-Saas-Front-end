import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../models/deal.model';

@Injectable({ providedIn: 'root' })
export class DealService {
  private apiUrl = 'https://sua-api.com/deals'; // ajuste para sua API

  constructor(private http: HttpClient) {}

  getAll(): Observable<Deal[]> {
    return this.http.get<Deal[]>(this.apiUrl);
  }

  getById(id: number): Observable<Deal> {
    return this.http.get<Deal>(`${this.apiUrl}/${id}`);
  }

  create(deal: Deal): Observable<Deal> {
    return this.http.post<Deal>(this.apiUrl, deal);
  }

  update(id: number, deal: Deal): Observable<Deal> {
    return this.http.put<Deal>(`${this.apiUrl}/${id}`, deal);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
