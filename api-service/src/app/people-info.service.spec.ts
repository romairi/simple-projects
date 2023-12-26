import { TestBed } from '@angular/core/testing';

import { PeopleInfoService } from './people-info.service';

describe('PeopleInfoService', () => {
  let service: PeopleInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
