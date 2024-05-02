import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderNavbarComponent } from './movie-finder-navbar.component';

describe('MovieFinderNavbarComponent', () => {
  let component: MovieFinderNavbarComponent;
  let fixture: ComponentFixture<MovieFinderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFinderNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieFinderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
