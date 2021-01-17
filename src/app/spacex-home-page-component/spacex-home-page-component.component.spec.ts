import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule, Routes } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
import { LoaderComponentComponent } from '../loader-component/loader-component.component';
import { SpacexFilterServiceService } from '../spacex-filter-service.service';
import { launchDataResponse } from '../Tests/launch-data-response';
import { SpacexFilterFacetComponentComponent } from './spacex-filter-facet-component/spacex-filter-facet-component.component';

import { SpacexHomePageComponentComponent } from './spacex-home-page-component.component';
import { SpacexLaunchCardComponentComponent } from './spacex-launch-card-component/spacex-launch-card-component.component';

const routes: Routes = [{path: '', component: SpacexHomePageComponentComponent}];
describe('SpacexHomePageComponentComponent', () => {
  let component: SpacexHomePageComponentComponent;
  let fixture: ComponentFixture<SpacexHomePageComponentComponent>;
  let spacexFilterServiceService: SpacexFilterServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterModule.forRoot(routes)],
      declarations: [
        SpacexHomePageComponentComponent,
        SpacexFilterFacetComponentComponent,
        SpacexLaunchCardComponentComponent,
        LoaderComponentComponent
      ],
      providers: [SpacexFilterServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexHomePageComponentComponent);
    component = fixture.componentInstance;
    spacexFilterServiceService = TestBed.get(SpacexFilterServiceService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const filterProps = {
    limit: '100',
    launch_year: '',
    launch_success: '',
    land_success: ''
  };

  describe('OnInit', () => {
    it('should initialize the filter props', () => {
      component.ngOnInit();
      expect(component.filterProps).toEqual(filterProps);
    });
  });

  describe('AfterViewInit', () => {
    it('should initialize the component with the launch data', () => {
      spyOn(component, 'getSpaceXLaunchCardResults');
      component.ngAfterViewInit();
      expect(component.getSpaceXLaunchCardResults).toHaveBeenCalled();
    });
  });

  describe('getSpaceXLaunchCardResults', () => {
    it('should invoke the launch API with initial calltype', () => {
      spyOn(LoaderComponentComponent.prototype, 'showLoader');
      spyOn(LoaderComponentComponent.prototype, 'dismissLoader');
      spyOn(spacexFilterServiceService, 'fetchSpacexLaunchCards').and.returnValue(of(launchDataResponse));
      component.getSpaceXLaunchCardResults('initialCall', filterProps);
      expect(component.launchData).toEqual(launchDataResponse);
      expect(component.isResponseEmpty).toBeFalsy();
      expect(LoaderComponentComponent.prototype.showLoader).toHaveBeenCalled();
      expect(LoaderComponentComponent.prototype.dismissLoader).toHaveBeenCalled();
      expect(spacexFilterServiceService.fetchSpacexLaunchCards).toHaveBeenCalledWith({limit: '100'});
    });
    it('should invoke the launch API without initial calltype', () => {
      spyOn(LoaderComponentComponent.prototype, 'showLoader');
      spyOn(LoaderComponentComponent.prototype, 'dismissLoader');
      spyOn(spacexFilterServiceService, 'fetchSpacexLaunchCards').and.returnValue(of(launchDataResponse));
      const appliedFilterProps = {
        limit: '100',
        launch_year: '2006',
        launch_success: 'true',
        land_success: 'true'
      };
      component.getSpaceXLaunchCardResults('', appliedFilterProps);
      expect(component.launchData).toEqual(launchDataResponse);
      expect(component.isResponseEmpty).toBeFalsy();
      expect(LoaderComponentComponent.prototype.showLoader).toHaveBeenCalled();
      expect(LoaderComponentComponent.prototype.dismissLoader).toHaveBeenCalled();
      expect(spacexFilterServiceService.fetchSpacexLaunchCards).toHaveBeenCalledWith(appliedFilterProps);
    });

    it('should invoke the launch API with applied filters and get no response', () => {
      spyOn(LoaderComponentComponent.prototype, 'showLoader');
      spyOn(LoaderComponentComponent.prototype, 'dismissLoader');
      spyOn(spacexFilterServiceService, 'fetchSpacexLaunchCards').and.returnValue(of([]));
      const appliedFilterProps = {
        limit: '100',
        launch_year: '2006',
        launch_success: 'true',
        land_success: 'true'
      };
      component.getSpaceXLaunchCardResults('', appliedFilterProps);
      expect(component.launchData).toEqual([]);
      expect(component.isResponseEmpty).toBeTruthy();
      expect(LoaderComponentComponent.prototype.showLoader).toHaveBeenCalled();
      expect(LoaderComponentComponent.prototype.dismissLoader).toHaveBeenCalled();
      expect(spacexFilterServiceService.fetchSpacexLaunchCards).toHaveBeenCalledWith(appliedFilterProps);
    });

    it('should invoke the All launch API and throw an error', () => {
      spyOn(LoaderComponentComponent.prototype, 'showLoader');
      spyOn(LoaderComponentComponent.prototype, 'dismissLoader');
      spyOn(spacexFilterServiceService, 'fetchSpacexLaunchCards').and.returnValue( throwError('error') );
      const appliedFilterProps = {
        limit: '100',
        launch_year: '2006',
        launch_success: 'true',
        land_success: 'true'
      };
      component.getSpaceXLaunchCardResults('', appliedFilterProps);
      expect(component.isResponseEmpty).toBeTruthy();
      expect(LoaderComponentComponent.prototype.showLoader).toHaveBeenCalled();
      expect(LoaderComponentComponent.prototype.dismissLoader).toHaveBeenCalled();
      expect(spacexFilterServiceService.fetchSpacexLaunchCards).toHaveBeenCalledWith(appliedFilterProps);
    });
  });

  describe('applyFilters', () => {
    it('should invoke the API on selection of any filter', () => {
      spyOn(component, 'getSpaceXLaunchCardResults');
      const appliedFilterProps = {
        limit: '100',
        launch_year: '2020',
        launch_success: 'false',
        land_success: 'true'
      };
      component.applyFilters(appliedFilterProps);
      expect(component.getSpaceXLaunchCardResults).toHaveBeenCalledWith('', appliedFilterProps);
    });
  });
});
