import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizDetailModel } from 'src/app/model/mymodels';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-quiz-tool',
  templateUrl: './quiz-tool.component.html',
  styleUrls: ['./quiz-tool.component.css']
})
export class QuizToolComponent implements OnInit {

  value: QuizDetailModel ={
    quizTitle: '',
    quizSubject: '',
    quizQuestionQuant: 0,
    quizDescription: '',
    quizDuration: 0
  };

  constructor(private userService: UserAuthService, private route:Router) { }

  ngOnInit(): void {

  }

  createQuiz()
  {
    console.log(this.value);
  }

}
