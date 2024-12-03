import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoReservaComponent } from './sucesso-reserva.component';

describe('SucessoReservaComponent', () => {
  let component: SucessoReservaComponent;
  let fixture: ComponentFixture<SucessoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucessoReservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
