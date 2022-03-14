import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { RegiaoRoutingModule } from './regiao-routing.module';
import { RegiaoComponent } from './regiao/regiao.component';


@NgModule({
  declarations: [
    RegiaoComponent
  ],
  imports: [
    CommonModule,
    RegiaoRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class RegiaoModule { }
