import { Component, OnInit } from '@angular/core';
import { SpacexFilterServiceService } from '../spacex-filter-service.service';

@Component({
  selector: 'app-spacex-home-page-component',
  templateUrl: './spacex-home-page-component.component.html',
  styleUrls: ['./spacex-home-page-component.component.scss']
})
export class SpacexHomePageComponentComponent implements OnInit {
  public launchData: any = [];
  public launchYears: any = [];
  constructor(
    private readonly spacexFilterServiceService: SpacexFilterServiceService
  ) { }

  ngOnInit(): void {
    this.getSpaceXLaunchCardResults();
  }

  getSpaceXLaunchCardResults(): void {
    this.spacexFilterServiceService.fetchSpacexLaunchCards().subscribe(
      (response) => {
        if (response?.length) {
          console.log(response);
          this.launchData =  response;
          this.launchData.forEach((launchEntry: any) => this.launchYears.push(launchEntry.launch_year));
          this.launchYears = Array.from(new Set(this.launchYears));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
