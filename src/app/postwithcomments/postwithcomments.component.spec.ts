import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostwithcommentsComponent } from './postwithcomments.component';

describe('PostwithcommentsComponent', () => {
  let component: PostwithcommentsComponent;
  let fixture: ComponentFixture<PostwithcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostwithcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostwithcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
