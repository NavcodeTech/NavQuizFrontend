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
    quizQuestionQuant: '',
    quizDescription: ''
  };

  constructor(private userService: UserAuthService, private route:Router) { }

  ngOnInit(): void {

  }

  creeateQuiz()
  {
    console.log(this.value);
  }

}
