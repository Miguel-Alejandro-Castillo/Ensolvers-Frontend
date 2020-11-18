import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewItemComponent } from './input-new-item.component';

describe('InputNewItemComponent', () => {
  let component: InputNewItemComponent;
  let fixture: ComponentFixture<InputNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
