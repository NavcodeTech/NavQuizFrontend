export interface User{
    username:string;
    email:string;
    password:string;
    role:string;
}

export interface QuizDetailModel{
    quizTitle: string;
    quizSubject: string;
    quizDuration: number;
    quizQuestionQuant: number;
    quizDescription: string;
    questionDetailsModelSet: QuestionDetailsModel[];  
}

export interface QuestionDetailsModel{
    questionTitle?: string;
    questionContent: string;
    option1: string
    option2: string;
    option3: string;
    option4: string;
}