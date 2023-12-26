import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelDetailsComponent } from './hostel-details.component';

describe('HostelDetailsComponent', () => {
  let component: HostelDetailsComponent;
  let fixture: ComponentFixture<HostelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostelDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
