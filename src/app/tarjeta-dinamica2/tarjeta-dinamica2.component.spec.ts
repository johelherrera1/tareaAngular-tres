import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDinamica2Component } from './tarjeta-dinamica2.component';

describe('TarjetaDinamica2Component', () => {
  let component: TarjetaDinamica2Component;
  let fixture: ComponentFixture<TarjetaDinamica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDinamica2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDinamica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
