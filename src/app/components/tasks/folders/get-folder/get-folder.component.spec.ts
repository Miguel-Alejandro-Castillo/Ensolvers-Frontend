import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFolderComponent } from './get-folder.component';

describe('GetFolderComponent', () => {
  let component: GetFolderComponent;
  let fixture: ComponentFixture<GetFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
