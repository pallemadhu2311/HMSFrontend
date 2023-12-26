import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintsComponent } from './view-complaints.component';

describe('ViewComplaintsComponent', () => {
  let component: ViewComplaintsComponent;
  let fixture: ComponentFixture<ViewComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComplaintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
