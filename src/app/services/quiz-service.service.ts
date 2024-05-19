import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizDetailModel } from '../model/mymodels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http:HttpClient) { }
  private apiUrl='http://localhost:8854/quizData/postQuiz'
  quizFormData(quizData: QuizDetailModel): Observable<string>
  {
    return this.http.post<string>(this.apiUrl, quizData);
  }
}
