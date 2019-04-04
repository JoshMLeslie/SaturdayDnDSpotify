import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReturnComponent} from './return.component';
import {ModuleRouting} from './return.router';

@NgModule({
  declarations: [ReturnComponent],
  imports: [
    CommonModule
    , ModuleRouting
  ]
})
export class ReturnModule { }
