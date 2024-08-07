import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietappComponent } from './dietapp.component';

describe('DietappComponent', () => {
  let component: DietappComponent;
  let fixture: ComponentFixture<DietappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
