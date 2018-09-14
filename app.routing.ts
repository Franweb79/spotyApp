import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './src/app/components/home/home.component';
import {NotfoundComponent} from './src/app/components/notfound/notfound.component';
import {SearchComponent} from './src/app/components/search/search.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }

  ];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes,{useHash:true});
