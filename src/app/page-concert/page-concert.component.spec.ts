import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConcertComponent } from './page-concert.component';

describe('PageConcertComponent', () => {
  let component: PageConcertComponent;
  let fixture: ComponentFixture<PageConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
