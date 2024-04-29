import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizToolComponent } from './quiz-tool.component';

describe('QuizToolComponent', () => {
  let component: QuizToolComponent;
  let fixture: ComponentFixture<QuizToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
