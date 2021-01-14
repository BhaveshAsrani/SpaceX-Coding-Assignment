import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexHomePageComponentComponent } from './spacex-home-page-component.component';

describe('SpacexHomePageComponentComponent', () => {
  let component: SpacexHomePageComponentComponent;
  let fixture: ComponentFixture<SpacexHomePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexHomePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexHomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
