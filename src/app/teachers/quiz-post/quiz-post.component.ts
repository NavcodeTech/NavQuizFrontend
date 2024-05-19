import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionDetailsModel } from 'src/app/model/mymodels';

@Component({
  selector: 'app-quiz-post',
  templateUrl: './quiz-post.component.html',
  styleUrls: ['./quiz-post.component.css']
})
export class QuizPostComponent implements OnInit {

  @Input() quizQuestionQuant!: number;
  @Input() quizModelSize!: number;
  @Output() addQuestionDetails = new EventEmitter<QuestionDetailsModel>();

  value: QuestionDetailsModel ={
    questionContent: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  }
  questionLeft: number=0;
  constructor() { }

  ngOnInit(): void {
    this.questionLeft = this.quizQuestionQuant;
  }

  addQuestion(): void {
    console.log(this.value);
    this.addQuestionDetails.emit(this.value);
    this.questionLeft = this.questionLeft - 1;
    this.value ={
      questionContent: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    };
    console.log(this.questionLeft);
  }

}
