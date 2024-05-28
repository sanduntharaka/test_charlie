import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCancelComponent } from './task-cancel.component';

describe('TaskCancelComponent', () => {
  let component: TaskCancelComponent;
  let fixture: ComponentFixture<TaskCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
