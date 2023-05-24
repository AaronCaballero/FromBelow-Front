import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartidasComponent } from './admin-partidas.component';

describe('AdminPartidasComponent', () => {
  let component: AdminPartidasComponent;
  let fixture: ComponentFixture<AdminPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
