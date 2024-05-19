import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPostComponent } from './quiz-post.component';

describe('QuizPostComponent', () => {
  let component: QuizPostComponent;
  let fixture: ComponentFixture<QuizPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
