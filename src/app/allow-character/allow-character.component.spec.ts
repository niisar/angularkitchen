import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowCharacterComponent } from './allow-character.component';

describe('AllowCharacterComponent', () => {
  let component: AllowCharacterComponent;
  let fixture: ComponentFixture<AllowCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
