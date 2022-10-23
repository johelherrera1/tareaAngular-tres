import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProgramadorComponent } from './tarjeta-programador.component';

describe('TarjetaProgramadorComponent', () => {
  let component: TarjetaProgramadorComponent;
  let fixture: ComponentFixture<TarjetaProgramadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProgramadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
