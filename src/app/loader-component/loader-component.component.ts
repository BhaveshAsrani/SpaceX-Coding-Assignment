import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {

  visible = false;
  constructor() { }

  ngOnInit(): void {
  }

  showLoader(): void {
    this.visible = true;
  }

  dismissLoader(): void {
    this.visible = false;
  }
}
