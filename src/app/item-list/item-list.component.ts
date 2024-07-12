import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './Item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  constructor(private itemService: ItemServiceService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.itemService.getAll()
      .subscribe(item => this.items = item);
  }

  upQuantity(item: Item): void {
    item.quantity++;
  }

  downQuantity(item: Item): void {
    if (item.quantity > 0)
      item.quantity--;
  }
}
