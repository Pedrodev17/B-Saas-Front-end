import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'https://sua-api.com/contacts'; // ajuste para sua API

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  update(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
