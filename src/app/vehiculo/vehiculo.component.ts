import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

 myForm: FormGroup;


  constructor( private fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
  }

}