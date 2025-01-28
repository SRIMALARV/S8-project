import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMaterialsComponent } from './available-materials.component';

describe('AvailableMaterialsComponent', () => {
  let component: AvailableMaterialsComponent;
  let fixture: ComponentFixture<AvailableMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
