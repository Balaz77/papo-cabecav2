import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversasPage } from './conversas.page';

describe('ConversasPage', () => {
  let component: ConversasPage;
  let fixture: ComponentFixture<ConversasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
