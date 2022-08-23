import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTuesdayComponent } from './task-tuesday.component';

describe('TaskTuesdayComponent', () => {
  let component: TaskTuesdayComponent;
  let fixture: ComponentFixture<TaskTuesdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTuesdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTuesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
