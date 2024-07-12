import { Component } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Item } from '../item-list/Item';

@Component({
  selector: 'app-item-io',
  templateUrl: './item-io.component.html',
  styleUrl: './item-io.component.scss'
})
export class ItemIoComponent {
  constructor(private itemService: ItemServiceService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.itemService.getAll()
      .subscribe(item => this.items = item);
  }

  createCSV(): string {
    let result: string = "Nombre,Peso,Vencimiento,Cantidad\n";
    
    this.items.forEach((item: Item)=>{
      let row = item.name + "," + item.weight + ","+item.yearExpiration+","+item.quantity+ "\n";
      result+= row;
    });

    console.log(result);
    return result;
  }

  joinRow(item: Item):string{
    let row = item.name + "," + item.weight + "\n";
    console.log(row);
    return row;
  }
}
