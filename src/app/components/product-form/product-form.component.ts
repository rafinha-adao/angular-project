import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {

  productForm = new FormGroup({
    image: new FormControl(''),
    name: new FormControl(''),
    value: new FormControl(''),
    amount: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void { }

}
