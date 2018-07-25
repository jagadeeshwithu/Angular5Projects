import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemsListComponent } from './nav-items-list.component';

describe('NavItemsListComponent', () => {
  let component: NavItemsListComponent;
  let fixture: ComponentFixture<NavItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
