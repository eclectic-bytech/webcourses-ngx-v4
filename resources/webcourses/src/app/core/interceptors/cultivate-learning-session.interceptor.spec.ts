import { TestBed } from '@angular/core/testing';

import { CultivateLearningSessionInterceptor } from './cultivate-learning-session.interceptor';

describe('CultivateLearningSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CultivateLearningSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CultivateLearningSessionInterceptor = TestBed.inject(CultivateLearningSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
