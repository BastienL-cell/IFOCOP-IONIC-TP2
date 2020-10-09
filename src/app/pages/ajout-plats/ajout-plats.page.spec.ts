import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutPlatsPage } from './ajout-plats.page';

describe('AjoutPlatsPage', () => {
  let component: AjoutPlatsPage;
  let fixture: ComponentFixture<AjoutPlatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPlatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutPlatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
