import { TestBed, inject } from '@angular/core/testing';

import { PublisherService } from './publisher.service';

describe('PublisherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublisherService]
    });
  });

  it('should ...', inject([PublisherService], (service: PublisherService) => {
    expect(service).toBeTruthy();
  }));
});
