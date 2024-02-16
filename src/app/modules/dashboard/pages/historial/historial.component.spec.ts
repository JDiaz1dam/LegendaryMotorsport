import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialComponent } from './historial.component';

describe('NftComponent', () => {
  let component: HistorialComponent
  let fixture: ComponentFixture<HistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HistorialComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
