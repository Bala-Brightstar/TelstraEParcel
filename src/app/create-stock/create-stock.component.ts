import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  @ViewChild('f') CreateForm: NgForm;
  formReceipt: FormGroup;
  maxLengthValidation: string;
  RLO: string;
  Consign: string;
  damage: string;
  status: string;
  barcode: string;

  constructor(private _route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeReceiptForm();
    this.maxLengthValidation = "Should not exceed the maximum allowed length!";
  }

  initializeReceiptForm(): void {
    this.formReceipt = this.formBuilder.group({
      'fcRloId': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[0-9]*')]),
      'fcConsignmentNo': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[0-9]*')]),
      'fcReceivingWithDamage': new FormControl(null, [Validators.maxLength(50)]),
      'fcStatus': new FormControl('Recieved', [Validators.required]),
      'fcBarcode': new FormControl(null, [Validators.required, Validators.maxLength(20)])
    });
  }

  get f() { return this.formReceipt.controls; }

  OnCancel(){
    this._route.navigate(['']);
  }

  OnSave(){
    console.log('Bala')
  }

  Onsubmit(){
    console.log('RLO: '+this.RLO+' Consign: '+this.Consign+' Damage: '+this.damage+' Status: '+this.status+' Barcode: '+this.barcode);
  }

}
