import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaidAccountPage } from './paid-account.page';

describe('PaidAccountPage', () => {
  let component: PaidAccountPage;
  let fixture: ComponentFixture<PaidAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaidAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
