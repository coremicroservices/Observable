import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { Receiver1Component } from './receiver1/receiver1.component';
import { Receiver2Component } from './receiver2/receiver2.component';
import { Receiver3Component } from './receiver3/receiver3.component';
import { ObservablesvcService } from './observablesvc.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    Receiver1Component,
    Receiver2Component,
    Receiver3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
