import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResolverTestComponent} from './resolver-test.component';

describe('ResolverTestComponent', () => {
  let component: ResolverTestComponent;
  let fixture: ComponentFixture<ResolverTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
