import {MatSort} from '@angular/material/sort';
import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Table } from 'primeng/table'
import {MatTableDataSource} from '@angular/material/table';
import { NgbDatepicker, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {ReceiptServiceService} from '../receipt-service.service'

export interface StockReceipt {
  asn: string;
  consignmentNumber: string;
  priority: string;
  barcode: string;
  freightProvider: string;
  date: string;
  rloId: string;
  ArticleId: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['ASN', 'Consignment', 'Priority', 'Barcode', 'Fright_Provider', 'S_Date', 'RLO_Id', 'Article_Id'];
  dataSource: MatTableDataSource<StockReceipt>;
  maxLengthValidation: string;
  showcreate: Boolean = false;
  model: NgbDateStruct;
  selectedAll: any;
  rowselect:Boolean = false;
  selectedReceipt:any[];

  statuses: any[];
  formReceipt: FormGroup;
  showList: boolean;
  showloader: boolean = false;
  blockui: boolean = false;

  loading: boolean = true;
  @ViewChild('dt') table: Table;
  @Input() receiptSeedData: any[];

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('dp') dp: NgbDatepicker;

  constructor(  private formBuilder: FormBuilder, 
                private messageService: MessageService,
                private _receiptService: ReceiptServiceService) {
  }

  receiptList: StockReceipt[] = [    
  {asn: '76221', consignmentNumber: '21621982', priority: 'Startrack', barcode: '34324', freightProvider:'Test2', date: '12-01-2020',rloId: '22', ArticleId: '8732683277836231'},
  {asn: '76222', consignmentNumber: '21621983', priority: 'Startrack', barcode: '34325', freightProvider:'Test3', date: '12-02-2020',rloId: '23', ArticleId: '8732683277836232'},
  {asn: '76223', consignmentNumber: '21621984', priority: 'Startrack', barcode: '34326', freightProvider:'Test4', date: '12-03-2020',rloId: '24', ArticleId: '8732683277836233'},
  {asn: '76224', consignmentNumber: '21621985', priority: 'Startrack', barcode: '34327', freightProvider:'Test5', date: '12-04-2020',rloId: '25', ArticleId: '8732683277836234'},
  {asn: '76225', consignmentNumber: '21621986', priority: 'Startrack', barcode: '34328', freightProvider:'Test6', date: '12-05-2020',rloId: '26', ArticleId: '8732683277836235'},
  {asn: '76226', consignmentNumber: '21621987', priority: 'Startrack', barcode: '34329', freightProvider:'Test7', date: '12-06-2020',rloId: '27', ArticleId: '8732683277836236'},
  {asn: '76227', consignmentNumber: '21621988', priority: 'Startrack', barcode: '34330', freightProvider:'Test8', date: '12-07-2020',rloId: '28', ArticleId: '8732683277836237'}
  ];

//   cols = [
//     { field: 'ASN', header: 'ASN' },
//     { field: 'Consignment', header: 'Consignment' },
//     { field: 'Priority', header: 'Priority' },
//     { field: 'Barcode', header: 'Barcode' },
//     { field: 'Fright_Provider', header: 'Fright Provider' },
//     { field: 'S_Date', header: 'Date', filterMatchMode:'equal'},
//     { field: 'RLO_Id', header: 'RLO Id' },
//     { field: 'Article_Id', header: 'Article Id' }
// ];

cols1 = [
  { field: 'ASN', header: 'ASN' },
  { field: 'Consignment', header: 'Consignment' },
  { field: 'Barcode', header: 'Barcode' },
  { field: 'S_Date', header: 'Date' },
  { field: 'RLO_Id', header: 'RLO Id' },
  { field: 'Article_Id', header: 'Article Id' }
];


ngOnInit() {
  this.showList = true;
  this.initializeReceiptList();
  this.maxLengthValidation = "Should not exceed the maximum allowed length!";
  console.log('Bala home init da ithu');
  this._receiptService.getReceipt().subscribe(res=>{
    console.log('Bala inka thaan irukken: '+res)
  })
  }

  initializeReceiptList(): void {
    setTimeout(() => {
      // this.receiptList = this.receiptSeedData;
      this.loading = false;
    }, 1000);
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

  initializeInputFields(): void {
    this.statuses = [
      { name: 'Recieved', code: 'Recieved' },
      { name: 'Rejected', code: 'Rejected' },
    ];
  }


  filter:Boolean = false;
  OnFilter(){
    console.log('before '+this.filter);
    this.filter=!this.filter;
    console.log('after '+this.filter);
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  onSubmitListItems(): void {
    this.showloader = true;
    this.blockui = true;
    console.log(this.selectedReceipt)
    setTimeout(() => {
      this.showloader = false;
      this.blockui = false;
      let selectedIds = this.selectedReceipt.map(s => { return s.rloId });
      let filtered = this.receiptList.filter(f => !selectedIds.includes(f.rloId));
      this.receiptList = filtered;
      this.messageService.add({severity:'success', summary:'Submitted', detail:'Receipts submitted successfully!'});
      this.selectedReceipt = [];
    }, 1000);
  }


  onCreateNew(): void {
    this.initializeInputFields();
    this.initializeReceiptForm();
    this.showList = false;
  }

  onSubmit(): void {
    this.loading = true;
    if (this.formReceipt.valid) {
      let receipt = {
        asn: '12345',
        consignmentNumber: this.formReceipt.value.fcConsignmentNo,
        priority: 'Startrack',
        freightProvider: 'Test1',
        barcode: this.formReceipt.value.fcBarcode,
        date: this.getTodaysDate(),
        rloId: this.formReceipt.value.fcRloId,
        ArticleId: 'Bala'
      }
      this.receiptList.push(receipt);
      this.loading = false;
      this.showList = true;
    }
  }

  onCancel(): void {
    this.showList = true;
  }

  private getTodaysDate(): string {
    var today = new Date();
    let formattedDate = this.formatDate(today);
    return formattedDate;
  }

  private formatDate(date: any) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return mm + '-' + dd + '-' + yyyy;
  }

 

}
