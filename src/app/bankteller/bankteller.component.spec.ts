import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanktellerComponent } from './bankteller.component';

describe('BanktellerComponent', () => {
  let component: BanktellerComponent;
  let fixture: ComponentFixture<BanktellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanktellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanktellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
