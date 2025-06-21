import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTable } from './image-table';

describe('ImageTable', () => {
  let component: ImageTable;
  let fixture: ComponentFixture<ImageTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
