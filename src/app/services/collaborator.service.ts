import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborator } from '../models/collaborator.model';

@Injectable({ providedIn: 'root' })
export class CollaboratorService {
  private apiUrl = 'https://sua-api.com/collaborators'; // ajuste para sua API

  constructor(private http: HttpClient) {}

  getAll(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.apiUrl);
  }

  getById(id: number): Observable<Collaborator> {
    return this.http.get<Collaborator>(`${this.apiUrl}/${id}`);
  }

  create(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.apiUrl, collaborator);
  }

  update(id: number, collaborator: Collaborator): Observable<Collaborator> {
    return this.http.put<Collaborator>(`${this.apiUrl}/${id}`, collaborator);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
