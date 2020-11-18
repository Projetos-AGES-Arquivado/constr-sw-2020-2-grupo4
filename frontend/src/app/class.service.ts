import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClass } from './app.component';

@Injectable({providedIn: 'root'})

export class ClassService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://ec2-34-238-114-89.compute-1.amazonaws.com:3000';
  }

  getAllClasses(): Observable<IClass[]>{
    return this.http.get<IClass[]>(`${this.baseUrl}/turma`)
  }

}
