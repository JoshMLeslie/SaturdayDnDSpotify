import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {MatCardModule, MatListModule} from '@angular/material';
import {ModuleRouting} from './landing.router';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule
    , ModuleRouting
    , MatCardModule
    , MatListModule
  ]
})
export class LandingModule { }
