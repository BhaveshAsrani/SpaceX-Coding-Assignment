import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexPageNotFoundComponentComponent } from './spacex-page-not-found-component.component';

describe('SpacexPageNotFoundComponentComponent', () => {
  let component: SpacexPageNotFoundComponentComponent;
  let fixture: ComponentFixture<SpacexPageNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexPageNotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexPageNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
