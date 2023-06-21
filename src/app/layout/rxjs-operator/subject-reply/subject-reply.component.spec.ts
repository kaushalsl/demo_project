import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectReplyComponent } from './subject-reply.component';

describe('SubjectReplyComponent', () => {
  let component: SubjectReplyComponent;
  let fixture: ComponentFixture<SubjectReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
