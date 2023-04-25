import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternoPage } from './interno.page';

describe('InternoPage', () => {
  let component: InternoPage;
  let fixture: ComponentFixture<InternoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
