import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormadosComponent } from './lista-formados.component';

describe('ListaFormadosComponent', () => {
  let component: ListaFormadosComponent;
  let fixture: ComponentFixture<ListaFormadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaFormadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFormadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
