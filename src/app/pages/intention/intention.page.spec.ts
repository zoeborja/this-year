import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntentionPage } from './intention.page';

describe('IntentionPage', () => {
  let component: IntentionPage;
  let fixture: ComponentFixture<IntentionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
