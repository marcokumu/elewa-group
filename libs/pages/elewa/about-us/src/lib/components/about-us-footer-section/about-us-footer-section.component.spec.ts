import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFooterSectionComponent } from './about-us-footer-section.component';

describe('AboutUsFooterSectionComponent', () => {
  let component: AboutUsFooterSectionComponent;
  let fixture: ComponentFixture<AboutUsFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsFooterSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
