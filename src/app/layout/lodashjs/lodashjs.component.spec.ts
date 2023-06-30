import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LodashjsComponent} from './lodashjs.component';

describe('LodashjsComponent', () => {
  let component: LodashjsComponent;
  let fixture: ComponentFixture<LodashjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
