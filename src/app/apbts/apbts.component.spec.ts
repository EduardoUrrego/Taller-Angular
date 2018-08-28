import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APBTSComponent } from './apbts.component';

describe('APBTSComponent', () => {
  let component: APBTSComponent;
  let fixture: ComponentFixture<APBTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APBTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APBTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
