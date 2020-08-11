import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalayticsComponent } from './data-analaytics.component';

describe('DataAnalayticsComponent', () => {
  let component: DataAnalayticsComponent;
  let fixture: ComponentFixture<DataAnalayticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAnalayticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalayticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
