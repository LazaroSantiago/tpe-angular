import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIoComponent } from './item-io.component';

describe('ItemIoComponent', () => {
  let component: ItemIoComponent;
  let fixture: ComponentFixture<ItemIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemIoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
