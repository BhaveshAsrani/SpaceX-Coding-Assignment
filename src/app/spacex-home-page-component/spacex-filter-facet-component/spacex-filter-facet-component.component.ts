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
