import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Import PrimeNG modules
import {DataTableModule, ButtonModule, SharedModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DataTableModule, ButtonModule, SharedModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
