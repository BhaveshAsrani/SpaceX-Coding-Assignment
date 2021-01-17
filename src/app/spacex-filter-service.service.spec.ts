import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpacexFilterServiceService } from './spacex-filter-service.service';
import { launchDataResponse } from './Tests/launch-data-response';

describe('SpacexFilterServiceService', () => {
  let service: SpacexFilterServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SpacexFilterServiceService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchSpacexLaunchCards', () => {
    const appliedFilterProps = {
      limit: '100',
      launch_year: '2006',
      launch_success: 'true',
      land_success: 'true'
    };
    afterEach(() => {
      httpTestingController.verify();
    });
    it('should fetch all the spacex launch data', () => {
      service.fetchSpacexLaunchCards(appliedFilterProps).subscribe( response => {
        expect(response).toBe(launchDataResponse);
      });
      const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2006&launch_success=true&land_success=true';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('https://api.spaceXdata.com/v3/launches');
      req.flush(launchDataResponse, {status: 200, statusText: 'SUCCESS'});
    });
    it('should throw an error if given service reacts with error response', () => {
      service.fetchSpacexLaunchCards(appliedFilterProps).subscribe(
        response => {},
        error => { expect(error.error).toEqual('Unable to process'); }
      );
      const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2006&launch_success=true&land_success=true';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('https://api.spaceXdata.com/v3/launches');
      req.flush('Unable to process', {status: 500, statusText: 'Bad Request'} );
    });
  });
});
