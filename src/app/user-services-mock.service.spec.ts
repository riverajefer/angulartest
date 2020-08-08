import { TestBed } from '@angular/core/testing';

import { UserServicesMockService } from './user-services-mock.service';

describe('UserServicesMockService', () => {
  let service: UserServicesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
