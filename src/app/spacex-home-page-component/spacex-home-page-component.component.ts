import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponentComponent } from '../loader-component/loader-component.component';
import { SpacexFilterServiceService } from '../spacex-filter-service.service';

@Component({
  selector: 'app-spacex-home-page-component',
  templateUrl: './spacex-home-page-component.component.html',
  styleUrls: ['./spacex-home-page-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpacexHomePageComponentComponent implements OnInit {
  public launchData: any = [];
  public launchYears: any = [];
  constructor(
    private readonly spacexFilterServiceService: SpacexFilterServiceService,
    private readonly router: Router
  ) { }

  isResponseEmpty = false;
  filterProps!: {
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;
  };

  @ViewChild(LoaderComponentComponent)
  loaderComponent = new LoaderComponentComponent();
  ngOnInit(): void {
    this.filterProps = {
      yearLaunch: '',
      successFullLaunch: '',
      successFullLand: ''
    };
    this.getSpaceXLaunchCardResults('initialCall', this.filterProps);
  }

  getSpaceXLaunchCardResults(callType: string, filterObj: {
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  }): void {
    this.loaderComponent.showLoader();
    const requestObj = this.getRequestPayload(filterObj);
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
        this.loaderComponent.dismissLoader();
      }
    );
  }
  getRequestPayload(filterObj: {
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  }): object {
    const requestObj: any = {};
    requestObj.limit = '100';
    if (filterObj.successFullLaunch) {
      requestObj.launch_success = filterObj.successFullLaunch;
    }
    if (filterObj.yearLaunch) {
      requestObj.launch_year = filterObj.yearLaunch;
    }
    if (filterObj.successFullLand) {
      requestObj.land_success = filterObj.successFullLand;
    }
    return requestObj;
  }
  populateLaunchYearsArray(): void {
    this.launchData.forEach((launchEntry: any) => this.launchYears.push(launchEntry.launch_year));
    this.launchYears = Array.from(new Set(this.launchYears));
  }

  applyFilters(filterObj: {
    yearLaunch: string;
    successFullLaunch: string;
    successFullLand: string;

  }): void {
    this.getSpaceXLaunchCardResults('', filterObj);
  }
}
