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
}