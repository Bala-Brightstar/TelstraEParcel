import {MatSort} from '@angular/material/sort';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Table } from 'primeng/table'
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

export interface StockReceipt {
  ASN: string;
  Consignment: string;
  Priority: string;
  Barcode: string;
  Fright_Provider: string;
  S_Date: string;
  RLO_Id: string;
  Article_Id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'TelstraApp';
  displayedColumns: string[] = ['ASN', 'Consignment', 'Priority', 'Barcode', 'Fright_Provider', 'S_Date', 'RLO_Id', 'Article_Id'];
  dataSource: MatTableDataSource<StockReceipt>;
  maxLengthValidation: string;
  showcreate: Boolean = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _modal: NgbModal) {
  }

  Stock_data: StockReceipt[] = [
    {ASN: '76221', Consignment: '21621982', Priority: 'Startrack', Barcode: '34324', Fright_Provider:'Test2', S_Date: 'Dec 01 2020',RLO_Id: '22', Article_Id: '8732683277836231'},
    {ASN: '76222', Consignment: '21621983', Priority: 'Startrack', Barcode: '34325', Fright_Provider:'Test3', S_Date: 'Dec 02 2020',RLO_Id: '23', Article_Id: '8732683277836232'},
    {ASN: '76223', Consignment: '21621984', Priority: 'Startrack', Barcode: '34326', Fright_Provider:'Test4', S_Date: 'Dec 03 2020',RLO_Id: '24', Article_Id: '8732683277836233'},
    {ASN: '76224', Consignment: '21621985', Priority: 'Startrack', Barcode: '34327', Fright_Provider:'Test5', S_Date: 'Dec 04 2020',RLO_Id: '25', Article_Id: '8732683277836234'},
    {ASN: '76225', Consignment: '21621986', Priority: 'Startrack', Barcode: '34328', Fright_Provider:'Test6', S_Date: 'Dec 05 2020',RLO_Id: '26', Article_Id: '8732683277836235'},
    {ASN: '76226', Consignment: '21621987', Priority: 'Startrack', Barcode: '34329', Fright_Provider:'Test7', S_Date: 'Dec 06 2020',RLO_Id: '27', Article_Id: '8732683277836236'},
    {ASN: '76227', Consignment: '21621988', Priority: 'Startrack', Barcode: '34330', Fright_Provider:'Test8', S_Date: 'Dec 07 2020',RLO_Id: '28', Article_Id: '8732683277836237'}
  ];

  cols = [
    { field: 'ASN', header: 'ASN' },
    { field: 'Consignment', header: 'Consignment' },
    { field: 'Priority', header: 'Priority' },
    { field: 'Barcode', header: 'Barcode' },
    { field: 'Fright_Provider', header: 'Fright Provider' },
    { field: 'S_Date', header: 'Date' },
    { field: 'RLO_Id', header: 'RLO Id' },
    { field: 'Article_Id', header: 'Article Id' }
];

statuses = [
  { name: 'Recieved', code: 'Recieved' },
  { name: 'Rejected', code: 'Rejected' },
];

ngOnInit() {
  this.maxLengthValidation = "Should not exceed the maximum allowed length!";
  }

  private formatDate(date: any) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return mm + '-' + dd + '-' + yyyy;
  }

  onCreate(){
    this.showcreate=true;
  }

  OpenModal(content) {
    const modalRef = this._modal.open(content, { size: 'xl' });
  }

  onSubmit(){
    console.log('sgdh')
  }

}
