import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Parent } from './parent';
import { Tutor } from './tutor';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  public parentURL: string;
  public tutorURL: string;


  constructor(private http: HttpClient) {
    this.parentURL = 'http://localhost:8082/ParentAPI/Parent';
    this.tutorURL = 'http://localhost:8083/TutorAPI/Tutor';
  }

  public findAll(): Observable<Parent[]> {
    return this.http.get<Parent[]>(this.parentURL);
  }

  public FindAllTutor(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.tutorURL);
  }

}
