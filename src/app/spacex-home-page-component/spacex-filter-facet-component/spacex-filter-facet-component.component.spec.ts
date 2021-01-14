import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFilterFacetComponentComponent } from './spacex-filter-facet-component.component';

describe('SpacexFilterFacetComponentComponent', () => {
  let component: SpacexFilterFacetComponentComponent;
  let fixture: ComponentFixture<SpacexFilterFacetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexFilterFacetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFilterFacetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
