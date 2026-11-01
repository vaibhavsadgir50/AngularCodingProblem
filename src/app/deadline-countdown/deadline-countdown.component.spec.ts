import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeadlineCountdown } from './deadline-countdown.component';

describe('DeadlineCountdown', () => {
  let component: DeadlineCountdown;
  let fixture: ComponentFixture<DeadlineCountdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineCountdown],
    }).compileComponents();

    fixture = TestBed.createComponent(DeadlineCountdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
