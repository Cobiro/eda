import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-add-product-form',
  template: `
    <h3>Add new product</h3>
    <form [formGroup]="addProduct" (ngSubmit)="onFormSubmit()">
      <p>
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input [formControlName]="'name'" type="text" matInput/>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field>
          <mat-label>Price</mat-label>
          <input matInput [formControlName]="'price'" type="number"/>
        </mat-form-field>
      </p>
      <button type="submit" mat-raised-button color="primary">Add</button>
    </form>
  `,
})
export class AddProductFormComponent {
  public addProduct = new FormGroup({
    name: new FormControl([]),
    price: new FormControl([])
  });

  constructor() {
  }

  onFormSubmit() {

  }

}
