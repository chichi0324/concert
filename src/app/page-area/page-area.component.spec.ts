import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAreaComponent } from './page-area.component';

describe('PageAreaComponent', () => {
  let component: PageAreaComponent;
  let fixture: ComponentFixture<PageAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
