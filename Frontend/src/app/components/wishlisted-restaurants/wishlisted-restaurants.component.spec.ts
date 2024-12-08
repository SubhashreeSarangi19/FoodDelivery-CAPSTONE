import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistedRestaurantsComponent } from './wishlisted-restaurants.component';

describe('WishlistedRestaurantsComponent', () => {
  let component: WishlistedRestaurantsComponent;
  let fixture: ComponentFixture<WishlistedRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistedRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistedRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
