import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleRouting} from './home.router';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
    , ModuleRouting
  ]
})
export class HomeModule { }
