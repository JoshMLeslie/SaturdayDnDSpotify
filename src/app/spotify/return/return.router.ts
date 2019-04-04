import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReturnComponent} from './return.component';

const routes: Routes = [
  {
    path: 'return'
    , component: ReturnComponent
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
