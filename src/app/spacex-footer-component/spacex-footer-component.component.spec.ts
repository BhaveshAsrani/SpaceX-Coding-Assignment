import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFooterComponentComponent } from './spacex-footer-component.component';

describe('SpacexFooterComponentComponent', () => {
  let component: SpacexFooterComponentComponent;
  let fixture: ComponentFixture<SpacexFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexFooterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
