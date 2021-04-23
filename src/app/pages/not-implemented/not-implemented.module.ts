import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from './not-implemented.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: NotImplementedComponent}
];

@NgModule({
  declarations: [
    NotImplementedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VetServicesModule { }
