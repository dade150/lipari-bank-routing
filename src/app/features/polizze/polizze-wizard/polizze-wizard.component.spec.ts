import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizzeWizardComponent } from './polizze-wizard.component';

describe('PolizzeWizardComponent', () => {
  let component: PolizzeWizardComponent;
  let fixture: ComponentFixture<PolizzeWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolizzeWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizzeWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
