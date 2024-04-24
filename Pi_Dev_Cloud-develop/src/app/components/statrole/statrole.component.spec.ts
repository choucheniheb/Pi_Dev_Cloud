import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatroleComponent } from './statrole.component';

describe('StatroleComponent', () => {
  let component: StatroleComponent;
  let fixture: ComponentFixture<StatroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
