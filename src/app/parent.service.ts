import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Parent } from './parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  public usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8082/ParentAPI/Parent';
  }

  public findAll(): Observable<Parent[]> {
    return this.http.get<Parent[]>(this.usersUrl);
  }
}
