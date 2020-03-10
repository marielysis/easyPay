import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutPage } from './rut.page';

describe('RutPage', () => {
  let component: RutPage;
  let fixture: ComponentFixture<RutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
