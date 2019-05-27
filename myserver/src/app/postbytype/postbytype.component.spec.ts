import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbytypeComponent } from './postbytype.component';

describe('PostbytypeComponent', () => {
  let component: PostbytypeComponent;
  let fixture: ComponentFixture<PostbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
