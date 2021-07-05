import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketTesterComponent } from './web-socket-tester.component';

describe('WebSocketTesterComponent', () => {
  let component: WebSocketTesterComponent;
  let fixture: ComponentFixture<WebSocketTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSocketTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO create stubs and write tests
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
