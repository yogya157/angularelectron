import { TestBed } from '@angular/core/testing';

import { ManageusersService } from './manageusers.service';

describe('ManageusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageusersService = TestBed.get(ManageusersService);
    expect(service).toBeTruthy();
  });
});
