import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDinamicaComponent } from './tarjeta-dinamica.component';

describe('TarjetaDinamicaComponent', () => {
  let component: TarjetaDinamicaComponent;
  let fixture: ComponentFixture<TarjetaDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDinamicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
