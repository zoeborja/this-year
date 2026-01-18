import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearSetupPage } from './year-setup.page';

describe('YearSetupPage', () => {
  let component: YearSetupPage;
  let fixture: ComponentFixture<YearSetupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
