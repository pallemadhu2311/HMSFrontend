import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingReportDetailsComponent } from './billing-report-details.component';

describe('BillingReportDetailsComponent', () => {
  let component: BillingReportDetailsComponent;
  let fixture: ComponentFixture<BillingReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingReportDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillingReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
