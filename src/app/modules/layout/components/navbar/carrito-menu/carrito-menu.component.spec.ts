import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoMenuComponent } from './carrito-menu.component';

describe('CarritoMenuComponent', () => {
  let component: CarritoMenuComponent;
  let fixture: ComponentFixture<CarritoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CarritoMenuComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
