import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponentComponent } from '../loader-component/loader-component.component';
import { SpacexFilterServiceService } from '../spacex-filter-service.service';
import { FilterProps } from './Types/filter-props';

@Component({
  selector: 'app-spacex-home-page-component',
  templateUrl: './spacex-home-page-component.component.html',
  styleUrls: ['./spacex-home-page-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpacexHomePageComponentComponent implements OnInit, AfterViewInit  {
  public launchData: any = [];
  public launchYears: string[] = [];
  constructor(
    private readonly spacexFilterServiceService: SpacexFilterServiceService,
    private readonly router: Router
  ) { }

  isResponseEmpty = false;
  filterProps!: FilterProps;

  @ViewChild(LoaderComponentComponent)
  loaderComponent = new LoaderComponentComponent();
  ngOnInit(): void {
    this.filterProps = {
      limit: '100',
      launch_year: '',
      launch_success: '',
      land_success: ''
    };
  }

  ngAfterViewInit(): void {
    this.getSpaceXLaunchCardResults('initialCall', this.filterProps);
  }

  getSpaceXLaunchCardResults(callType: string, filterObj: FilterProps): void {
    this.loaderComponent.showLoader();
    const requestObj = callType === 'initialCall' ? {limit: '100'} : filterObj;
    this.router.navigate([], {
      queryParams: requestObj
    });
    this.spacexFilterServiceService.fetchSpacexLaunchCards(requestObj).subscribe(
      (response) => {
        this.launchData = response;
        this.loaderComponent.dismissLoader();
        if (callType === 'initialCall') {
          this.populateLaunchYearsArray();
        }
        this.isResponseEmpty = !this.launchData.length;
      },
      (error) => {
        this.isResponseEmpty = true;
        this.loaderComponent.dismissLoader();
      }
    );
  }
  populateLaunchYearsArray(): void {
    this.launchData.forEach((launchEntry: any) => this.launchYears.push(launchEntry.launch_year));
    this.launchYears = Array.from(new Set(this.launchYears));
  }

  applyFilters(filterObj: FilterProps): void {
    this.getSpaceXLaunchCardResults('', filterObj);
  }
}
