import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMomentPage } from './add-moment.page';

describe('AddMomentPage', () => {
  let component: AddMomentPage;
  let fixture: ComponentFixture<AddMomentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMomentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
