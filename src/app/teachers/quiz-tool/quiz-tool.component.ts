import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionDetailsModel, QuizDetailModel } from 'src/app/model/mymodels';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
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
    quizDuration: 0,
    questionDetailsModelSet: []
  };

  isPostClicked: boolean = false;
  questionQuant: number = 0;
  quizModelSize: number = 0;

  constructor(private userService: UserAuthService, 
    private quizService: QuizServiceService,
    private route:Router) { }

  ngOnInit(): void {

  }

  postClicked(): void {
    this.isPostClicked = true;
    this.questionQuant = this.value.quizQuestionQuant; 
    console.log('post clicked')
  }

  createQuiz(): void
  {
    console.log(this.value);
    if (this.value.quizTitle !== '') {
      this.quizService.quizFormData(this.value).subscribe((response:string) => console.log(response));
    }
    else
     console.log('form title required');
  }
  addQuestionFunc(data: QuestionDetailsModel): void {
    console.log(data);
    this.value.questionDetailsModelSet.push(data);
    this.quizModelSize = this.value.questionDetailsModelSet.length; 
  }

}
