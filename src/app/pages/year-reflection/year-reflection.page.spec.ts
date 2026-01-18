import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearReflectionPage } from './year-reflection.page';

describe('YearReflectionPage', () => {
  let component: YearReflectionPage;
  let fixture: ComponentFixture<YearReflectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YearReflectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
