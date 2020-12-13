import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmRowPageComponent } from './pages/data-management/dm-row-page/dm-row-page.component';
import { DmAttributePageComponent } from './pages/data-management/dm-attribute-page/dm-attribute-page.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadDataPageComponent } from './pages/load-data-page/load-data-page.component';
import { SaGeneralPageComponent } from './pages/statistic-analysis/sa-general-page/sa-general-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'guide', component: GuidePageComponent },
  { path: 'load', component: LoadDataPageComponent },
  { 
    path: 'data',
    children: [
      { path: 'row', component: DmRowPageComponent  },
      { path: 'attributes', component: DmAttributePageComponent }
    ]
  },
  { path: 'statistic-analysis/general', component: SaGeneralPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
