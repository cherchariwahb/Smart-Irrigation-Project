import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEquipementComponent } from './crud-equipement.component';

describe('CrudEquipementComponent', () => {
  let component: CrudEquipementComponent;
  let fixture: ComponentFixture<CrudEquipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEquipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
