import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHostelComponent } from './manage-hostel.component';

describe('ManageHostelComponent', () => {
  let component: ManageHostelComponent;
  let fixture: ComponentFixture<ManageHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageHostelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
