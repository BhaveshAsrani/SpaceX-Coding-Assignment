import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponentComponent } from './loader-component.component';

describe('LoaderComponentComponent', () => {
  let component: LoaderComponentComponent;
  let fixture: ComponentFixture<LoaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showLoader', () => {
    it('shpuld turn on the loader', () => {
      component.showLoader();
      expect(component.visible).toBeTruthy();
    });
  });
  describe('dismissLoader', () => {
    it('shpuld turn off the loader', () => {
      component.dismissLoader();
      expect(component.visible).toBeFalsy();
    });
  });
});
