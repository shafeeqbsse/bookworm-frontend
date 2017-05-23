import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSelectorComponent } from './publisher-selector.component';

describe('PublisherSelectorComponent', () => {
  let component: PublisherSelectorComponent;
  let fixture: ComponentFixture<PublisherSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
