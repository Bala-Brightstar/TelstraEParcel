import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table' 
import {TableModule} from 'primeng/table'; 
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortDirDirective } from './Util/sort-dir.directive';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { ValidateComponent } from './Util/validate/validate.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const routes: Routes = [
  { path: 'create', component: CreateStockComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SortDirDirective,
    CreateStockComponent,
    HomeComponent,
    ValidateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    BlockUIModule,
    ProgressSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
