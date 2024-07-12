import { Component } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Item } from '../item-list/Item';

@Component({
  selector: 'app-list-preview',
  templateUrl: './list-preview.component.html',
  styleUrl: './list-preview.component.scss'
})
export class ListPreviewComponent {
  constructor(private itemService: ItemServiceService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.itemService.getAll()
      .subscribe(item => this.items = item);
  }
}
