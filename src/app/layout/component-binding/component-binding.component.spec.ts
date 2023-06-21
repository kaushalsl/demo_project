import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentBindingComponent} from './component-binding.component';

describe('ComponentBindingComponent', () => {
  let component: ComponentBindingComponent;
  let fixture: ComponentFixture<ComponentBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBindingComponent]
    });
    fixture = TestBed.createComponent(ComponentBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
