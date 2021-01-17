import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {

  visible = false;
  constructor() { }

  /**
   * This life cycle hook is called on load of this component.
   */
  ngOnInit(): void {
  }

  /**
   * This method is used show the loader.
   */
  showLoader(): void {
    this.visible = true;
  }

  /**
   * This method is used hide the loader.
   */
  dismissLoader(): void {
    this.visible = false;
  }
}
