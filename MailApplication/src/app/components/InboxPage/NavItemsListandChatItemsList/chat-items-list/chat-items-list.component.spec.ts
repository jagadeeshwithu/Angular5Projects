import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatItemsListComponent } from './chat-items-list.component';

describe('ChatItemsListComponent', () => {
  let component: ChatItemsListComponent;
  let fixture: ComponentFixture<ChatItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
