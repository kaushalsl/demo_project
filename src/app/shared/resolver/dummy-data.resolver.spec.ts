import {TestBed} from '@angular/core/testing';
import {ResolveFn} from '@angular/router';

import {dummyDataResolver} from './dummy-data.resolver';

describe('dummyDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => dummyDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
