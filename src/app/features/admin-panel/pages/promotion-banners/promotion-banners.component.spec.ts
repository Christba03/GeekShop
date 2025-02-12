import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBannersComponent } from './promotion-banners.component';

describe('PromotionBannersComponent', () => {
  let component: PromotionBannersComponent;
  let fixture: ComponentFixture<PromotionBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromotionBannersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
