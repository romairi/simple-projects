import { TestBed } from '@angular/core/testing';

import { RxjsPeopleServiceService } from './rxjs-people-service.service';

describe('RxjsPeopleServiceService', () => {
  let service: RxjsPeopleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsPeopleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
