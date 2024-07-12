import { Injectable } from '@angular/core';
import { Item } from './item-list/Item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  private _items: Item[] = [];
  items: BehaviorSubject<Item[]> = new BehaviorSubject(this._items);

  constructor() { }

  createItem(name: string, weight: number, yearExpiration: number): Item {
    const item: Item = {
      name: name,
      weight: weight,
      yearExpiration: yearExpiration,
      quantity: 0,
    };
    return item;
  }

  addToList(name: string, weight: number, yearExpiration: number): boolean {
    let contains: Item = this._items.find((v1) => v1.name == name) as Item;

    if (!contains) {
      let item: Item = this.createItem(name, weight, yearExpiration);
      this._items.push(item);
      this.items.next(this._items);
      return true;
    } else {
      this.items.next(this._items);
      return false;
    }
  }

  getAll(): Observable<Item[]> {
    return this.items.asObservable();
  }
}
