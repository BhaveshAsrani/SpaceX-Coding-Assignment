import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterProps } from '../Types/filter-props';

@Component({
  selector: 'app-spacex-filter-facet-component',
  templateUrl: './spacex-filter-facet-component.component.html',
  styleUrls: ['./spacex-filter-facet-component.component.scss'],
})
export class SpacexFilterFacetComponentComponent {

  @Input() launchYears: string[] = [];
  @Output()
  filterEmitter: EventEmitter<FilterProps> = new EventEmitter<FilterProps>();
  filterProps: any = {};
  constructor() { }

  /**
   * This method is invoked when the user selects/de-selects any filter from filter facet.
   * @param category - launch_year or launch_success or land_success.
   * @param selectedFilter - Value of the selected filter.
   */
  applyFilters(category: string, selectedFilter: string): void {
    this.filterProps.limit = '100';
    if (this.filterProps[category] !== selectedFilter) {
      this.filterProps[category] = selectedFilter;
    } else {
      delete this.filterProps[category];
    }
    this.filterEmitter.emit(this.filterProps);
  }
}
