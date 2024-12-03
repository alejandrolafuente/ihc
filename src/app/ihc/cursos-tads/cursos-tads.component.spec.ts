import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTadsComponent } from './cursos-tads.component';

describe('CursosTadsComponent', () => {
  let component: CursosTadsComponent;
  let fixture: ComponentFixture<CursosTadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosTadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosTadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
