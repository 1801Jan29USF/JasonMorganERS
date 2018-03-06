import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedTableComponent } from './denied-table.component';

describe('DeniedTableComponent', () => {
  let component: DeniedTableComponent;
  let fixture: ComponentFixture<DeniedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
