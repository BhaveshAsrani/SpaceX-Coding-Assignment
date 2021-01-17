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

  describe('applyFilters', () => {
    it('should apply the selected filters', () => {
      spyOn(component.filterEmitter, 'emit');
      component.applyFilters('launch_year', '2006');
      expect(component.filterProps).toEqual({ limit: '100', launch_year: '2006' });
      expect(component.filterEmitter.emit).toHaveBeenCalled();
    });
    it('should apply the de-select filters if already applied', () => {
      spyOn(component.filterEmitter, 'emit');
      component.filterProps = { limit: '100', launch_year: '2006' };
      component.applyFilters('launch_year', '2006');
      expect(component.filterProps).toEqual({ limit: '100' });
      expect(component.filterEmitter.emit).toHaveBeenCalled();
    });
  });
});
