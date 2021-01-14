import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-filter-facet-component',
  templateUrl: './spacex-filter-facet-component.component.html',
  styleUrls: ['./spacex-filter-facet-component.component.scss']
})
export class SpacexFilterFacetComponentComponent implements OnInit {

  @Input() launchYears = [];
  constructor() { }
  ngOnInit(): void {
  }

}
