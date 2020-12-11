import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  @Input("form_Control") fc: FormControl;
  @Input("requiredValMsg") requiredValMsg: string;
  @Input("maxValMsg") maxValMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
