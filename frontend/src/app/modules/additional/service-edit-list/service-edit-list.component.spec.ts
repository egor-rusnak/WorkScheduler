import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEditListComponent } from './service-edit-list.component';

describe('ServiceEditListComponent', () => {
  let component: ServiceEditListComponent;
  let fixture: ComponentFixture<ServiceEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
