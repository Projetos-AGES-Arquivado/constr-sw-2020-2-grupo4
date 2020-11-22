import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvaluation } from '../interfaces/IEvaluation';

@Injectable({providedIn: 'root'})

export class EvaluationService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://ec2-52-67-129-68.sa-east-1.compute.amazonaws.com:8000/api/v1';
  }

  getAllEvaluations(): Observable<IEvaluation[]>{
    return this.http.get<IEvaluation[]>(`${this.baseUrl}/avaliacoes`)
  }

}
