import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people-service.service';

describe('PeopleServiceService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
