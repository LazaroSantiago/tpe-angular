import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})

export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      name: ['Fideos Guiseros'],
      weight: ['200'],
      yearExpiration: ['2025'],
    });
  }

  createItem(): void {
    let b: boolean = this.itemService.addToList(this.itemForm.value.name, this.itemForm.value.weight, this.itemForm.value.yearExpiration);
    this.showWarning(!b);
    console.log(b);
  }

  showWarning(warn: boolean) {
    let span = document.querySelector("span");
    if (span) {
      if (warn)
        span.style.display = "block";
      else
        span.style.display = "none";
    }
  }
}