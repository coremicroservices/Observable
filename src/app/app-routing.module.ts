import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { Receiver1Component } from './receiver1/receiver1.component';
import { Receiver2Component } from './receiver2/receiver2.component';
import { Receiver3Component } from './receiver3/receiver3.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
