import { TestBed } from '@angular/core/testing';

import { PostTypeService } from './post-type.service';

describe('PostTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTypeService = TestBed.get(PostTypeService);
    expect(service).toBeTruthy();
  });
});
