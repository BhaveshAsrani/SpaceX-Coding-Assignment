import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchCardComponentComponent } from './spacex-launch-card-component.component';

describe('SpacexLaunchCardComponentComponent', () => {
  let component: SpacexLaunchCardComponentComponent;
  let fixture: ComponentFixture<SpacexLaunchCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexLaunchCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
