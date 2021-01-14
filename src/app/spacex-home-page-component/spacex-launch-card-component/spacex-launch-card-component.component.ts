import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-launch-card-component',
  templateUrl: './spacex-launch-card-component.component.html',
  styleUrls: ['./spacex-launch-card-component.component.scss']
})
export class SpacexLaunchCardComponentComponent implements OnInit {

  @Input() cardData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
