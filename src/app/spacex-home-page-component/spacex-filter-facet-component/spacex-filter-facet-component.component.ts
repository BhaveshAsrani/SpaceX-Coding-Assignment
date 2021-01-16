import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-spacex-filter-facet-component',
  templateUrl: './spacex-filter-facet-component.component.html',
  styleUrls: ['./spacex-filter-facet-component.component.scss'],
})
export class SpacexFilterFacetComponentComponent implements OnInit {

  @Input() launchYears = [];
  @Output()
  filterEmitter: EventEmitter<{
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  }> = new EventEmitter<{
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  }>();
  filterArr = [];
  filterProps!: {
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  };
  constructor() { }
  ngOnInit(): void {
    this.filterProps = {
      yearLaunch: '',
      successFullLaunch: '',
      successFullLand: ''
    };
  }

  yearFilter(selectedFilter: string): void {
    this.filterProps.yearLaunch = this.filterProps.yearLaunch !== selectedFilter ? selectedFilter : '';
    this.filterEmitter.emit(this.filterProps);
  }

  SuccessfulLaunchFilter(selectedFilter: string): void {
    this.filterProps.successFullLaunch = this.filterProps.successFullLaunch !== selectedFilter ? selectedFilter : '';
    this.filterEmitter.emit(this.filterProps);
  }

  SuccessfulLandFilter(selectedFilter: string): void {
    this.filterProps.successFullLand = this.filterProps.successFullLand !== selectedFilter ? selectedFilter : '';
    this.filterEmitter.emit(this.filterProps);
  }

}
