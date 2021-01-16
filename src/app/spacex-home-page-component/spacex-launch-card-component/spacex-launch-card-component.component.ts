import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacex-launch-card-component',
  templateUrl: './spacex-launch-card-component.component.html',
  styleUrls: ['./spacex-launch-card-component.component.scss']
})
export class SpacexLaunchCardComponentComponent {

  @Input() launchData: any;
  constructor() { }

}
