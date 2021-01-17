import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexHeaderComponentComponent } from './spacex-header-component.component';

describe('SpacexHeaderComponentComponent', () => {
  let component: SpacexHeaderComponentComponent;
  let fixture: ComponentFixture<SpacexHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
