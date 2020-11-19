import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedStoryComponent } from './finished-story.component';

describe('FinishedStoryComponent', () => {
  let component: FinishedStoryComponent;
  let fixture: ComponentFixture<FinishedStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
