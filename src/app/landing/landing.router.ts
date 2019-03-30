import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing.component';

const routes: Routes = [
  {
    path: 'landing'
    , component: LandingComponent
  }
  , {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
